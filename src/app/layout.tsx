import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,}: Readonly<{
children: React.ReactNode;}>) {return (
    <html>
      <body>
      <header className="header">
        <nav>
          <Link href="/">Home</Link>
          <Link href="/blogs">Our Blogs</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
          </header>
        {children}
      <footer className="footer"><nav>Created by Aqsa Iftikhar</nav></footer>
      </body>
    </html>
  );
}
