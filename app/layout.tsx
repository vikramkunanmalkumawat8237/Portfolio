import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { CustomCursor } from "@/components/layout/cursor";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { BackToTop } from "@/components/layout/back-to-top";
import { profile } from "@/lib/data";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://vikramkumawat.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} — ${profile.headline}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.heroIntro,
  keywords: [
    "Vikram Kumawat",
    "CA Final",
    "Audit Associate",
    "PwC India",
    "Statutory Audit",
    "Financial Modelling",
    "FP&A",
    "Chartered Accountant",
    "Finance Portfolio",
  ],
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: `${profile.name} — ${profile.headline}`,
    description: profile.heroIntro,
    siteName: `${profile.name} | Portfolio`,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.headline}`,
    description: profile.heroIntro,
  },
  manifest: "/manifest.json",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.headline,
  email: `mailto:${profile.email}`,
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "Organization",
    name: "PwC India",
  },
  sameAs: [
    "https://www.linkedin.com/in/vikram-kumawat8237",
    "https://github.com/vikramkunanmalkumawat8237",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${display.variable} ${body.variable} ${mono.variable} font-body`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded focus:bg-emerald focus:px-4 focus:py-2 focus:text-ink focus:font-medium"
          >
            Skip to content
          </a>
          <ScrollProgress />
          <CustomCursor />
          <div id="main">{children}</div>
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
