// layout.js
"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";
import { AuthProvider } from "@/context/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";

// Styles
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
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [visitCount, setVisitCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js").catch((err) =>
      console.error("Bootstrap load failed:", err)
    );
  }, []);

  // Handle route change loading
  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const loadVisitorAndChat = async () => {
      setIsLoading(false);
      
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const res = await fetch("/api/visitor", {
            credentials: "include",
            headers: {
              "Cache-Control": "no-cache",
              Authorization: `Bearer ${token}`,
            },
          });

          if (res.ok) {
            const data = await res.json();
            setVisitCount(data.count);
          }
        }

        // Tawk.to chat integration
        const s1 = document.createElement("script");
        s1.src = "https://embed.tawk.to/67dbead42e2e10190e26a8c3/1impgqk5k";
        s1.async = true;
        s1.charset = "UTF-8";
        s1.setAttribute("crossorigin", "*");
        const s0 = document.getElementsByTagName("script")[0];
        s0?.parentNode?.insertBefore(s1, s0);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    loadVisitorAndChat();
  }, [pathname]);

  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Swatrixsoft - Professional Web Development Services"
        />
        <title>Swatrixsoft - Web Development Company</title>

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
      </head>

      <body suppressHydrationWarning={true}>
        <AuthProvider>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />

          {/* Show loading spinner with Swatrixsoft logo while loading or navigating */}
          {(isLoading || isNavigating) ? (
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              minHeight: '100vh',
              backgroundColor: '#f8f9fa',
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px'
              }}>
                <img 
                  src="/images/logo/logo.png" 
                  alt="Swatrixsoft" 
                  style={{
                    width: '120px',
                    height: 'auto',
                    animation: 'pulse 2s infinite'
                  }}
                />
                <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
              <style jsx>{`
                @keyframes pulse {
                  0% { opacity: 0.6; transform: scale(1); }
                  50% { opacity: 1; transform: scale(1.05); }
                  100% { opacity: 0.6; transform: scale(1); }
                }
              `}</style>
            </div>
          ) : children}

          {/* Visitor counter for authenticated pages */}
          {pathname !== "/login" && visitCount !== null && (
            <div
              className="visitor-counter"
              style={{
                position: "fixed",
                bottom: "20px",
                left: "20px",
                background: "rgba(0,0,0,0.8)",
                color: "#fff",
                padding: "12px 20px",
                borderRadius: "10px",
                fontSize: "1rem",
                zIndex: 9999,
                boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <i className="fas fa-users"></i>
              <span role="status">
                Visitors: {visitCount.toLocaleString()}
              </span>
            </div>
          )}
        </AuthProvider>
      </body>
    </html>
  );
}
