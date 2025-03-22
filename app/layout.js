"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";
import { AuthProvider } from "@/context/AuthContext";
import { usePathname, useRouter } from "next/navigation";

// Import styles
import "bootstrap/scss/bootstrap.scss";
import "../public/scss/default/euclid-circulara.scss";
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
import "../public/scss/styles.scss";

const LOGIN_ROUTE = "/login";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [visitCount, setVisitCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load Bootstrap JS on client only
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min.js").catch((error) =>
        console.error("Failed to load Bootstrap:", error)
      );
    }
  }, []);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      if (typeof window === "undefined" || pathname === LOGIN_ROUTE) {
        setIsLoading(false);
        return;
      }

      const token = localStorage.getItem("token");
      if (!token) {
        router.replace(LOGIN_ROUTE);
        return;
      }

      try {
        const res = await fetch("/api/visitor", {
          credentials: "include",
          headers: {
            "Cache-Control": "no-cache",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          if (res.status === 401) {
            router.replace(LOGIN_ROUTE);
          }
          throw new Error("Failed to fetch visitor count");
        }

        const data = await res.json();
        setVisitCount(data.count);
      } catch (err) {
        console.error("Error fetching visitor count:", err);
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
        <title>Swatrixsoft</title>

        {/* Google Analytics */}
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

        {/* Tawk.to Live Chat */}
        {!isLoading && pathname !== LOGIN_ROUTE && (
          <Script
            src="https://embed.tawk.to/67dbead42e2e10190e26a8c3/1impgqk5k"
            strategy="afterInteractive"
            async
            crossOrigin="*"
          />
        )}
      </head>

      <body suppressHydrationWarning={true}>
        <AuthProvider>
          {children}

          {!isLoading && pathname !== LOGIN_ROUTE && (
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
                opacity: 1,
                transition: "opacity 0.3s ease",
              }}
            >
              <span role="status">
                {visitCount !== null
                  ? `Visitors: ${visitCount}`
                  : "Counter unavailable"}
              </span>
            </div>
          )}
        </AuthProvider>
      </body>
    </html>
  );
}
