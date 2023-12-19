import type { Metadata } from "next";
import { Fira_Sans, Roboto } from "next/font/google";
import "./globals.css";
import { firaSansFont, robotoFont } from "@/lib/font";

// const firaSansFont = Fira_Sans({
//   weight: "400",
//   variable: "--font-fira-sans",
//   subsets: ["cyrillic"],
// });

// const robotoFont = Roboto({
//   weight: "400",
//   variable: "--font-roboto",
//   subsets: ["cyrillic"],
// });

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
      </body>
    </html>
  );
}
