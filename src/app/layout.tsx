import type { Metadata } from "next";
import { Lexend_Deca } from 'next/font/google';
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";


const montserrat = Lexend_Deca({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} scrollbar-hide`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
