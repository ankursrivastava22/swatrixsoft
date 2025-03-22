"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  // ✅ Check auth once on load
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        handleUnauthenticated();
        return;
      }

      const res = await fetch("/api/auth/verify", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
        credentials: "include",
      });

      if (res.ok) {
        const data = await res.json();
        handleAuthenticated(data.user); // ✅ only pass the actual user
      } else {
        handleUnauthenticated();
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      handleUnauthenticated();
    } finally {
      setIsLoading(false);
    }
  }, [pathname]);

  const handleAuthenticated = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);

    if (pathname === "/login") {
      router.replace("/");
    }
  };

  const handleUnauthenticated = () => {
    localStorage.removeItem("token");
    deleteAuthTokenCookie();
    setIsAuthenticated(false);
    setUser(null);

    if (pathname !== "/login") {
      router.replace("/login");
    }
  };

  const deleteAuthTokenCookie = () => {
    // ✅ Only remove the authToken instead of nuking all cookies
    document.cookie =
      "authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
  };

  const login = async (token, userData) => {
    try {
      localStorage.setItem("token", token);

      // ✅ safer cookie without domain unless really needed
      document.cookie = `authToken=${token}; path=/; max-age=86400; samesite=strict${
        process.env.NODE_ENV === "production" ? "; secure" : ""
      }`;

      handleAuthenticated(userData);
    } catch (error) {
      console.error("Login failed:", error);
      handleUnauthenticated();
    }
  };

  const logout = async () => {
    try {
      const token = localStorage.getItem("token");

      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
        headers: {
          Authorization: `Bearer ${token}`,
          "Cache-Control": "no-cache",
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Logout API call failed:", error);
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
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
