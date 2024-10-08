import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Button } from "@/components/ui/button";

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
  title: "Create Next App",
  description: "Generated by create next app",
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
        <nav className=" z-10 absolute w-screen my-4 gap-8 text-white flex md:justify-end justify-center md:pr-12 lg:pr-24 items-center">
          <Button variant={"cyanOutLine"}>who am i</Button>
          <Button variant={"cyanOutLine"}>Button</Button>
          <Button variant={"cyanOutLine"}>Button</Button>
        </nav>
        {children}
      </body>
    </html>
  );
}
