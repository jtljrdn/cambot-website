import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | CamBot.xyz",
    default: "CamBot.xyz",
  },
  description: "Your multipurpose Discord bot.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="night">
      <body className={inter.className}>
        <div className="app min-w-96">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
