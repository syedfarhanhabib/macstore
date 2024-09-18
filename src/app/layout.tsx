import type { Metadata } from "next";
import { DM_Sans, Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import { Providers } from "./providers";
import React from "react";
import { GeistSans } from 'geist/font/sans';


const urbanist = Urbanist({ subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syed Farhan Habib",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} scrollbar-thin max-w-screen-2xl mx-auto `}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
