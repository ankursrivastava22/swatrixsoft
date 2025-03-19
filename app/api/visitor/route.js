"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";

export default function RootLayout({ children }) {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Update local storage for visitor count
    let visits = localStorage.getItem("visitor_count");
    if (!visits) {
      visits = 1;
    } else {
      visits = parseInt(visits) + 1;
    }
    localStorage.setItem("visitor_count", visits);
    setVisitCount(visits);
  }, []);

  return (
    <html lang="en">
      <head>
        {/* Google Tag */}
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
      <body>
        {children}
        
        {/* Display visitor count */}
        <div
          style={{
            position: "fixed",
            bottom: "10px",
            right: "10px",
            background: "rgba(0,0,0,0.6)",
            color: "#fff",
            padding: "8px 12px",
            borderRadius: "4px",
            fontSize: "0.9rem",
          }}
        >
          {visitCount ? `Total Visits: ${visitCount}` : "Loading..."}
        </div>
      </body>
    </html>
  );
}
