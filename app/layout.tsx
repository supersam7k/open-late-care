import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://urgentcarenearme24.com";
const GA_ID = "G-3ZSPLPH985";
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
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`,
          }}
        />
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <header style={{
          background: "#0070f3",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 56,
          position: "sticky",
          top: 0,
          zIndex: 100,
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        }}>
          <a href="/" style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem", textDecoration: "none" }}>
            UrgentCareNearMe24
          </a>
          <nav style={{ display: "flex", gap: 24 }}>
            <a href="/" style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9rem", textDecoration: "none" }}>
              Home
            </a>
            <a href="/#cities" style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9rem", textDecoration: "none" }}>
              Browse Cities
            </a>
          </nav>
        </header>

        <div style={{ flex: 1 }}>{children}</div>

        <footer style={{
          background: "#1a1a1a",
          color: "#aaa",
          padding: "32px 24px",
          marginTop: 64,
          fontSize: "0.875rem",
        }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <p style={{ margin: "0 0 4px", fontWeight: 700, color: "#fff", fontSize: "1rem" }}>UrgentCareNearMe24</p>
              <p style={{ margin: 0 }}>Find urgent care open now near you.</p>
            </div>
            <div>
              <p style={{ margin: "0 0 8px", color: "#fff", fontWeight: 600 }}>Quick Links</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <a href="/" style={{ color: "#aaa" }}>Home</a>
                <a href="/#cities" style={{ color: "#aaa" }}>Browse Cities</a>
              </div>
            </div>
          </div>
          <div style={{ maxWidth: 900, margin: "24px auto 0", borderTop: "1px solid #333", paddingTop: 16, textAlign: "center" }}>
            &copy; {new Date().getFullYear()} UrgentCareNearMe24.com — For medical emergencies, call 911.
          </div>
        </footer>
      </body>
    </html>
  );
}
