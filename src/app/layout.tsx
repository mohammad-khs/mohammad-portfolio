import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import FloatingDockWrapper from "@/components/floatingDockWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mohammad's Portfolio",
  description: "about mohammad khosravani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950`}
      >
        <nav className="m-4 md:mt-16 fixed md:left-0 bottom-0 right-0 z-10 md:flex justify-center">
          <div className="inline-flex z-50">
            <FloatingDockWrapper />
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
