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
      <body className={`${hankenGrotesk.className}`}>
        <div className="relative h-screen">
          <div className="absolute inset-0 bg-opacity-75 bg-white" style={{zIndex: 1}} />
          <div className="absolute inset-0 bg-cover bg-center" style={{ zIndex: 0, backgroundImage: "url('/p2-opacity-small.jpg')"}} />
          <div className="absolute inset-0 px-10" style={{zIndex: 10}}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
