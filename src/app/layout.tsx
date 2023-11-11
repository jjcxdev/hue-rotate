import "@/styles/globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Hue Rotate",
  description: "created by jjcx",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Hue Rotate</title>
        <meta
          name="description"
          content="Hue Rotate is a React application that allows users to select an initial color and a desired color, then calculates the CSS `hue-rotate` filter value required to transition between these colors."
        />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://hue-rotate.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hue Rotate" />
        <meta
          property="og:description"
          content="Hue Rotate is a React application that allows users to select an initial color and a desired color, then calculates the CSS `hue-rotate` filter value required to transition between these colors."
        />
        <meta
          property="og:image"
          content="https://hue-rotate.vercel.app/hue.png"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hue-rotate.vercel.app/" />
        <meta name="twitter:title" content="Hue Rotate" />
        <meta
          name="twitter:description"
          content="Hue Rotate is a React application that allows users to select an initial color and a desired color, then calculates the CSS `hue-rotate` filter value required to transition between these colors."
        />
        <meta
          name="twitter:image"
          content="https://hue-rotate.vercel.app/hue.png"
        />
      </Head>
      <body className={`font-sans ${inter.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
