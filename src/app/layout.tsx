import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anis Home Care Services | Compassionate Senior Care in Northern Virginia",
  description:
    "Nurse-led, compassionate home care in Northern Virginia. Founded by Maryam Garousi, RN, BSN with 28+ years experience. Personalized caregiver matching & multilingual support (Farsi, Russian, Turkish, Spanish, Chinese, Hindi).",
  keywords: [
    "Anis Home Care",
    "home care Northern Virginia",
    "senior care Fairfax VA",
    "private nursing care",
    "caregiver Northern Virginia",
    "respite care",
    "personal care assistant",
    "geriatric care",
    "Maryam Garousi RN",
  ],
  authors: [{ name: "Maryam Garousi, RN, BSN" }],
  openGraph: {
    title: "Anis Home Care Services | Compassionate Senior Care",
    description:
      "Nurse-led, compassionate home care in Northern Virginia with 28+ years experience. Personalized care plans for your loved ones.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased text-[#1a1c19] bg-[#faf8f3] min-h-screen flex flex-col selection:bg-[#335338] selection:text-white">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
