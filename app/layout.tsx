import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Spacestation Investments",
  description: "Backing the next generation of iconic consumer brands",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        <div className="pt-16 min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
