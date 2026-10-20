import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/MotionProvider";
import { Nav } from "@/components/Nav";
import { ScrollProgress } from "@/components/ScrollProgress";
import { site } from "@/lib/site";
import "./globals.css";

const aileron = localFont({
  src: [
    { path: "./fonts/Aileron-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Aileron-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-aileron",
  display: "swap",
});

const title = `${site.name} | ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url || "http://localhost:3000"),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  alternates: site.url ? { canonical: "/" } : undefined,
  openGraph: { title, description: site.description, siteName: site.name, type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image", title, description: site.description },
  robots: site.allowIndexing ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#242424", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={aileron.variable}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <MotionProvider>
          <ScrollProgress />
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
