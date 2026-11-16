import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-newsreader",
  display: "swap",
  // Next has no fallback metrics for Newsreader; skip the size-adjust step.
  adjustFontFallback: false,
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.aniruddhan.com";
const DESCRIPTION =
  "Aniruddhan Ramesh is a computer science student at the University of Cincinnati who works on AI safety using mechanistic interpretability, and was previously a machine learning engineering intern at Oumi.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Aniruddhan Ramesh",
    template: "%s · Aniruddhan Ramesh",
  },
  description: DESCRIPTION,
  keywords: [
    "Aniruddhan Ramesh",
    "AI safety",
    "mechanistic interpretability",
    "AURA-Eval",
    "LLM agents",
    "Oumi",
    "NeurIPS",
    "machine learning engineer",
    "open source ML",
    "University of Cincinnati",
    "polysemanticity",
    "interpretability",
  ],
  authors: [{ name: "Aniruddhan Ramesh", url: SITE_URL }],
  creator: "Aniruddhan Ramesh",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Aniruddhan Ramesh",
    title: "Aniruddhan Ramesh",
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aniruddhan Ramesh",
    description: DESCRIPTION,
    creator: "@aniruddhr04",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdfdfc" },
    { media: "(prefers-color-scheme: dark)", color: "#131418" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${GeistSans.variable}`}
    >
      <body className="font-serif text-[18px] leading-[1.6] antialiased">
        {children}
      </body>
    </html>
  );
}
