"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem("token");
      
      if (!token) {
        handleUnauthenticated();
        return;
      }

      const response = await fetch('/api/auth/verify', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });

      if (response.ok) {
        const userData = await response.json();
        handleAuthenticated(userData);
      } else {
        handleUnauthenticated();
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      handleUnauthenticated();
    } finally {
      setIsLoading(false);
    }
  };

  const handleAuthenticated = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    if (pathname === '/login') {
      router.replace('/');
    }
  };

  const handleUnauthenticated = () => {
    localStorage.removeItem("token");
    clearAuthCookies();
    setIsAuthenticated(false);
    setUser(null);
    if (pathname !== '/login') {
      router.replace('/login');
    }
  };

  const clearAuthCookies = () => {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const cookieName = cookie.split('=')[0].trim();
      document.cookie = `${cookieName}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=${window.location.hostname}`;
    }
  };

  const login = async (token, userData) => {
    try {
      localStorage.setItem("token", token);
      document.cookie = `authToken=${token}; path=/; max-age=86400; samesite=strict; domain=${window.location.hostname}${process.env.NODE_ENV === 'production' ? '; secure' : ''}`;
      handleAuthenticated(userData);
    } catch (error) {
      console.error('Login failed:', error);
      handleUnauthenticated();
    }
  };

  const logout = async () => {
    try {
      const token = localStorage.getItem("token");
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.error('Logout API call failed:', error);
    } finally {
      handleUnauthenticated();
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        isAuthenticated, 
        isLoading, 
        user, 
        login, 
        logout, 
        checkAuth 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};