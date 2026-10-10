import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE } from "@/lib/data";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import ScrollProgress from "@/components/site/ScrollProgress";

export const metadata: Metadata = {
  metadataBase: new URL("https://aadishaktiyogshaala.com"),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.shortDesc,
  keywords: [
    "yoga classes",
    "Hatha yoga",
    "Ashtanga yoga",
    "yoga teacher training",
    "morning yoga batch",
    "evening yoga classes",
    "pranayama",
    "yoga nidra",
    "Rishikesh yoga shaala",
  ],
  openGraph: {
    type: "website",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.shortDesc,
    siteName: SITE.name,
    images: [{ url: "/images/hero-shiva-shakti.webp", width: 1664, height: 936 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.shortDesc,
    images: ["/images/hero-shiva-shakti.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#07040e",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* The two faces used above the fold; the rest load on demand. */}
        <link
          rel="preload"
          href="/fonts/cormorant-garamond-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/jost-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-night text-cream min-h-full">
        <ScrollProgress />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
