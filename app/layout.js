"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";
import Head from 'next/head';
import { AuthProvider } from '@/context/AuthContext';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

// Import styles
import "bootstrap/scss/bootstrap.scss";
import "../public/scss/default/euclid-circulara.scss";
// ========= Plugins CSS START =========
import "../node_modules/sal.js/dist/sal.css";
import "../public/css/plugins/fontawesome.min.css";
import "../public/css/plugins/feather.css";
import "../public/css/plugins/odometer.css";
import "../public/css/plugins/animation.css";
import "../public/css/plugins/euclid-circulara.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
// ========= Plugins CSS END =========

import "../public/scss/styles.scss";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [visitCount, setVisitCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadBootstrap = async () => {
      try {
        await import("bootstrap/dist/js/bootstrap.bundle.min.js");
      } catch (error) {
        console.error('Failed to load Bootstrap:', error);
      }
    };
    loadBootstrap();
  }, []);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      if (pathname === '/login') {
        setIsLoading(false);
        return;
      }

      try {
        const token = localStorage.getItem('token');
        if (!token) {
          router.replace('/login');
          return;
        }

        const res = await fetch("/api/visitor", { 
          credentials: "include",
          headers: {
            'Cache-Control': 'no-cache',
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!res.ok) {
          if (res.status === 401) {
            router.replace('/login');
            return;
          }
          throw new Error('Failed to fetch visitor count');
        }
        
        const data = await res.json();
        setVisitCount(data.count);
      } catch (err) {
        console.error("Error fetching visitor count:", err);
        if (err.message.includes('401')) {
          router.replace('/login');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchVisitorCount();
  }, [pathname, router]);

  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-NY8PHCYQDV"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NY8PHCYQDV', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function() {
              var s1 = document.createElement("script"),
                  s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/67dbead42e2e10190e26a8c3/1impgqk5k';
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1, s0);
            })();
          `}
        </Script>
      </head>
      <body suppressHydrationWarning={true}>
        <AuthProvider>
          {children}
          {!isLoading && pathname !== '/login' && (
            <div
              className="visitor-counter"
              style={{
                position: "fixed",
                bottom: "20px",
                left: "20px",
                background: "rgba(0,0,0,0.7)",
                color: "#fff",
                padding: "10px 15px",
                borderRadius: "8px",
                fontSize: "0.9rem",
                zIndex: 9999,
                boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                transition: "opacity 0.3s ease",
                opacity: isLoading ? 0 : 1,
              }}
            >
              <span role="status">
                {visitCount !== null ? `Visitors: ${visitCount}` : "Counter unavailable"}
              </span>
            </div>
          )}
        </AuthProvider>
      </body>
    </html>
  );
}