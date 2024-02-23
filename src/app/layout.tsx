import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const productSans = localFont({
  src: [
    {
      path: "./fonts/Product-Sans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Product-Sans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Product-Sans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Product-Sans-Bold-Italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-product-sans",
});

export const metadata: Metadata = {
  title: "PSGoogle",
  description: "An OK search engine for the PSGCT Official Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${productSans.className}`}>
        {children}
      </body>
    </html>
  );
}
