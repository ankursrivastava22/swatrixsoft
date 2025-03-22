"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";
import { AuthProvider } from "@/context/AuthContext";
import { usePathname, useRouter } from "next/navigation";

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

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [visitCount, setVisitCount] = useState(null);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js").catch((err) =>
      console.error("Bootstrap load failed:", err)
    );
  }, []);

  useEffect(() => {
    const loadVisitorAndChat = async () => {
      if (pathname === "/login") return;

      try {
        const token = localStorage.getItem("token");
        if (!token) {
          router.replace("/login");
          return;
        }

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
        } else if (res.status === 401) {
          router.replace("/login");
        } else {
          throw new Error("Visitor fetch failed");
        }

        // ✅ Tawk.to script injection
        const s1 = document.createElement("script");
        s1.src = "https://embed.tawk.to/67dbead42e2e10190e26a8c3/1impgqk5k";
        s1.async = true;
        s1.charset = "UTF-8";
        s1.setAttribute("crossorigin", "*");
        const s0 = document.getElementsByTagName("script")[0];
        s0?.parentNode?.insertBefore(s1, s0);
      } catch (error) {
        console.error("Visitor or chat load error:", error);
      }
    };

    loadVisitorAndChat();
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
      </head>

      <body suppressHydrationWarning={true}>
        <AuthProvider>
          {children}

          {/* Visitor Counter */}
          {pathname !== "/login" && visitCount !== null && (
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
              }}
            >
              <span role="status">
                Visitors: {visitCount}
              </span>
            </div>
          )}
        </AuthProvider>
      </body>
    </html>
  );
}
