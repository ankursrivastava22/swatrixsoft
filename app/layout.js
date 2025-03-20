"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";

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
  // Load Bootstrap JS once on client
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  // Visitor Count State
  const [visitCount, setVisitCount] = useState(null);

  // Fetch visitor count on client
  useEffect(() => {
    fetch("/api/visitor", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        setVisitCount(data.count);
      })
      .catch((err) => console.error("Error fetching visitor count:", err));
  }, []);

  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Google Tag Manager (gtag.js) */}
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

        {/* Tawk.to Live Chat Script */}
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
        {/* Your page content */}
        {children}

        {/* Moved visitor counter OUT of <head> and into <body> */}
        <div
          style={{
            position: "fixed",
            bottom: "10px",
            left: "10px",
            background: "rgba(0,0,0,0.6)",
            color: "#fff",
            padding: "8px 12px",
            borderRadius: "4px",
            fontSize: "0.9rem",
            zIndex: 9999,
          }}
        >
          {visitCount === null
            ? "Loading visitors..."
            : `Visitors: ${visitCount}`}
        </div>
      </body>
    </html>
  );
}
