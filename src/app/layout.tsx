import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aniruddha Thakur | Project Showcase",
  description: "The ultimate showcase of my tech wizardry!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title></title>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
