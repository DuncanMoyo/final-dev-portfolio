import type { Metadata } from "next";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";
import { firaSansFont, robotoFont } from "@/lib/font";

export const metadata: Metadata = {
  title: "Duncan Moyo | Web Developer",
  description:
    "Welcome to the portfolio of Duncan Moyo. As a professional web developer, I create high-quality, scalable web applications. Explore my work, skills, and get in touch!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${firaSansFont.variable} ${robotoFont.variable}`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
