import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import SmoothScroll from "@/component/SmoothScroll";
import Preloader from "@/component/Preloader";
import PageTransition from "@/component/PageTransition";

import "./globals.css";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Nittin K.A. | Visionary Entrepreneur & Global Leader",
  description: "Official personal brand website of Dr. Nittin K.A. - Chairman & Founder of ONEX Group. Redefining global development through visionary leadership and excellence across Real Estate, Education, and Hospitality.",
  keywords: ["Dr. Nittin K.A.", "ONEX Group", "Visionary Leader", "Entrepreneur", "Global Development", "Real Estate UAE", "Education Canada"],
  openGraph: {
    title: "Dr. Nittin K.A. | Visionary Entrepreneur & Global Leader",
    description: "Chairman & Founder of ONEX Group. Building empires that stand the test of time.",
    images: ["/images/Nitinsir.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Preloader />
        <SmoothScroll>
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
