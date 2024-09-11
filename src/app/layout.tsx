import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Consult Corp",
  description: "Consult Corp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="/assets/images/favicon.png"
          type="image/x-icon"
        />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/tailwind.css" />
      </head>
      <body className={inter.className}>
        {children}

        <Script src="/assets/js/wow.min.js" />
        <Script src="/assets/js/swiper-bundle.min.js" />
        <Script src="/assets/js/main.js" />

      </body>
    </html>
  );
}