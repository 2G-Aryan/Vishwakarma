import localFont from "next/font/local";
import {Sen} from 'next/font/google';
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

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

const Josef = Sen({
  subsets: ["latin"],
  weight: ["400","500","600","700"],
    display: "swap"
});

export const metadata = {
  title: "Vishwakarma Civil And Stone Work",
  description:
    "Vishwakarma Civil and Stone Work is proud to be the leading provider of premium natural stone flooring in Surat, known for our unmatched craftsmanship and luxurious finishes. Renowned across Gujarat, we stand among the best for delivering timeless elegance and exceptional quality.",
  verification: {
    google: "Qojhb3uODo9pb0LyIrqFZOYgC4sOVHSPhxSsZvbrP_8",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className= {`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <ThemeProvider attribute="class" defaultTheme="light"><Header />
        {children}     
      </ThemeProvider>< Footer/>
      </body>
    </html>
  );
}
