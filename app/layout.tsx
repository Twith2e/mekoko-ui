import type { Metadata } from "next";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import "@mantine/core/styles.css";
import "./globals.css";
import localFont from "next/font/local";
import Providers from "./_components/Providers";

export const metadata: Metadata = {
  title: "Mekoko — Coming Soon",
  description:
    "Handcrafted crochet treasures made with love. Launching soon — join the waitlist.",
  icons: {
    icon: "/logo.jpg",
  },
};

const quickSand = localFont({
  src: "../public/Quicksand/Quicksand-VariableFont_wght.ttf",
  variable: "--font-quicksand",
  weight: "300 700",
  display: "swap",
});

const edGaramond = localFont({
  src: "../public/EB_Garamond/EBGaramond-VariableFont_wght.ttf",
  variable: "--font-garamond",
  weight: "300 700",
  display: "swap",
});

const dmSans = localFont({
  src: "../public/DM_Sans/DMSans-VariableFont_opsz,wght.ttf",
  variable: "--font-sans",
  weight: "300 700",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`h-full ${quickSand.variable} ${edGaramond.variable} ${dmSans.variable}`}
      {...mantineHtmlProps}
    >
      <head>
        <ColorSchemeScript />
      </head>
      <body className="min-h-full antialiased bg-off-white text-warm-dark">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
