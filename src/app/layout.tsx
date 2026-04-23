import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://aniruddhan.vercel.app";
const DESCRIPTION =
  "Aniruddhan Ramesh — machine learning engineer at Oumi. Research on the inside of language models, open-source tooling for foundation models, and applied ML across clinical, audio, and real-estate domains.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Aniruddhan Ramesh",
    template: "%s · Aniruddhan Ramesh",
  },
  description: DESCRIPTION,
  keywords: [
    "Aniruddhan Ramesh",
    "mechanistic interpretability",
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
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="font-sans antialiased bg-surface-0 text-zinc-50 min-h-screen">
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
