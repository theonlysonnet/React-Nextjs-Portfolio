import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import FooterBar from "@/components/FooterBar";

const poppins = Poppins({
  subsets: ["latin"], // Ensures the font supports Latin characters
  weight: ["400", "700"], // Load specific weights like regular (400) and bold (700)
  variable: "--font-poppins", // Set a CSS variable name for the font
});

export const metadata: Metadata = {
  title: "Sonnet's Portfolio",
  description: "Portfolio of Sonnet Salice the computer engineer and creator studying currently at the University of Toronto",
  keywords: "University of Toronto, Computer, Engineering, Engineer, Philosophy, Life, University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <NavBar/>
        {children}
        <FooterBar/>
      </body>
    </html>
  );
}
