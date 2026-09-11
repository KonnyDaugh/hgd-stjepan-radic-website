import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://hgd-stjepan-radic.from-split.com",
  ),

  title: 'HGD "Stjepan Radić" Žrnovnica',

  description:
    "HGD „Stjepan Radić“ Žrnovnica — 115 godina glazbe, zajedništva i tradicije. Koncerti, povijest, arhiv i informacije o pridruživanju orkestru.",

  openGraph: {
    type: "website",
    locale: "hr_HR",
    url: "https://hgd-stjepan-radic.from-split.com",
    siteName: 'HGD "Stjepan Radić" Žrnovnica',
    title: 'HGD "Stjepan Radić" Žrnovnica',
    description:
      "115 godina glazbe, zajedništva i tradicije u Žrnovnici.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: 'HGD "Stjepan Radić" Žrnovnica',
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: 'HGD "Stjepan Radić" Žrnovnica',
    description:
      "115 godina glazbe, zajedništva i tradicije u Žrnovnici.",
    images: ["/opengraph-image.jpg"],
  },

  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body
        className={`${manrope.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}