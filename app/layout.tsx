import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "cambot.xyz",
  description: "cambot.xyz",
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
        </div>
      </body>
    </html>
  );
}
