import { Fira_Sans, Roboto } from "next/font/google";

export const firaSansFont = Fira_Sans({
  weight: "400",
  variable: "--font-fira-sans",
  subsets: ["cyrillic"],
});

export const robotoFont = Roboto({
  weight: "400",
  variable: "--font-roboto",
  subsets: ["cyrillic"],
});