import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import localFont from "next/font/local";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
});

const customFont = localFont({
  src: "../public/fonts/Shelley Script LT Std Regular/Shelley Script LT Std Regular.otf",
  variable: "--font-shelley",
});

export const metadata: Metadata = {
  title: "Presentation Counts",
  description:
    "We have extensive experience in the presentation and furnishing of apartments, townhouses, residential developments and family homes.",
  keywords: "Property Styling, Staging, Styling consultant",
  openGraph: {
    title: "Presentation Counts",
    description:
      "We have extensive experience in the presentation and furnishing of apartments, townhouses, residential developments and family homes.",
    type: "website",
    url: "https://www.presentationcounts.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${customFont.variable} ${cormorant.variable} ${montserrat.variable}`}
      >
        <div className="flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
