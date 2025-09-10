import {  Inter, Geist } from "next/font/google";
import "./globals.css";
import Providers from "@/store/Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}  antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
