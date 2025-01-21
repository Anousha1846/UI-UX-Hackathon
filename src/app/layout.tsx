import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import BackToTopButton from "../components/custum/Resuable/BackToTop"; 
import ClientProvider from "@/components/custum/ClientProvider";
import { WishlistProvider } from '../contexts/WishlistContext';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UI/UX Hackathon",
  description: "Generated by Anousha AsadUllah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
  <WishlistProvider> 
    <ClientProvider> 
      <Header />
      {children}
      <Footer />
      <BackToTopButton />
    </ClientProvider>
  </WishlistProvider>
</body>
    </html>
  );
}
