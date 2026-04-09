import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const BASE_URL = "https://urgentcarenearme24.com";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const ADSENSE_ID = "ca-pub-7148799077582934";

export const metadata: Metadata = {
  title: {
    default: "Urgent Care Near Me Open Now | 24 Hour & Late Night Clinics",
    template: "%s | UrgentCareNearMe24",
  },
  description:
    "Find urgent care centers open right now near you. Browse 24-hour and late-night clinics by city with addresses, phone numbers, and hours.",
  metadataBase: new URL(BASE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* AdSense verification — must be a real script tag in <head> for Google crawler */}
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
          crossOrigin="anonymous"
        />
      </head>
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}

        <header style={{ background: "#0070f3", padding: "12px 20px" }}>
          <a
            href="/"
            style={{ color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "1.1rem" }}
          >
            UrgentCareNearMe24
          </a>
        </header>

        <main style={{ flex: 1 }}>{children}</main>

        <footer style={{ background: "#f5f5f5", borderTop: "1px solid #e0e0e0", padding: "20px", textAlign: "center", fontSize: "0.85rem", color: "#777" }}>
          <p style={{ margin: 0 }}>
            &copy; {new Date().getFullYear()} UrgentCareNearMe24.com &mdash; Find urgent care open now near you.
          </p>
          <p style={{ margin: "8px 0 0" }}>
            <a href="/" style={{ color: "#0070f3", textDecoration: "none" }}>Home</a>
          </p>
        </footer>
      </body>
    </html>
  );
}
