// AuthContext.js
"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback
} from "react";
import { useRouter, usePathname } from "next/navigation";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  // Run once on mount
  useEffect(() => {
    checkAuth();
  }, []);

  // Verify token & update auth state
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
        const { user: userData } = await res.json();
        handleAuthenticated(userData);
      } else {
        handleUnauthenticated();
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      handleUnauthenticated();
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Called when verify succeeds
  const handleAuthenticated = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);

    // If you just logged in at "/login", go home
    if (pathname === "/login") {
      router.replace("/");
    }
  };

  // Called when verify fails or no token
  const handleUnauthenticated = () => {
    localStorage.removeItem("token");
    deleteAuthTokenCookie();
    setIsAuthenticated(false);
    setUser(null);

    // Only redirect if you’re not already on "/" or "/login"
    if (pathname !== "/" && pathname !== "/login") {
      router.replace("/login");
    }
  };

  const deleteAuthTokenCookie = () => {
    document.cookie =
      "authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
  };

  // Exposed login function
  const login = async (token, userData) => {
    try {
      localStorage.setItem("token", token);
      document.cookie = `authToken=${token}; path=/; max-age=86400; samesite=strict${
        process.env.NODE_ENV === "production" ? "; secure" : ""
      }`;

      handleAuthenticated(userData);
    } catch (error) {
      console.error("Login failed:", error);
      handleUnauthenticated();
    }
  };

  // Exposed logout function
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
      console.error("Logout failed:", error);
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
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return ctx;
};
