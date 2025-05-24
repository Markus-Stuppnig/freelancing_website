import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const rubik = Rubik({ variable: "--font-rubik", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Markus Stuppnig – Data Scientist & AI Developer",
  description:
    "Meet a data scientist and software developer passionate about solving real-world problems with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
