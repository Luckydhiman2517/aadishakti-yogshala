import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost, Tiro_Devanagari_Hindi } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/data";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import ScrollProgress from "@/components/site/ScrollProgress";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const tiro = Tiro_Devanagari_Hindi({
  variable: "--font-tiro",
  subsets: ["devanagari", "latin"],
  weight: ["400"],
  display: "swap",
});

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
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} ${tiro.variable} h-full antialiased`}
    >
      <body className="bg-night text-cream min-h-full">
        <ScrollProgress />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
