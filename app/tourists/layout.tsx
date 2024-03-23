import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "../globals.css";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Swallows",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`px-10 bg-[url('../public/p2-opacity.png')] bg-cover bg-no-repeat ${hankenGrotesk.className}`}>{children}</body>
    </html>
  );
}
