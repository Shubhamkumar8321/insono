import Navigation from "@/components/Navigation";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Insono Hearing",
  description: "Affordable, reliable hearing aids with local support.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-museo bg-white text-gray-900 antialiased bg-gradient-to-b from-[#eaf5ff] to-white">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
