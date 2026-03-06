import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
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
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <div className="flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
