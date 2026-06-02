import type { Metadata } from "next";
import Hero from "./components/Hero";
import Information from "./components/Information";

export const metadata: Metadata = {
  title: {
    absolute: "Presentation Counts — Property Stylists Melbourne",
  },
  description:
    "Melbourne's leading property styling and home staging service. With 20+ years of experience and 500+ homes styled, we help Melbourne homes sell faster and at higher prices.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Presentation Counts — Melbourne Property Stylists",
    description:
      "Melbourne's leading property styling and home staging service. With 20+ years of experience and 500+ homes styled, we help Melbourne homes sell faster and at higher prices.",
    images: [
      {
        url: "/images/gallery/01image.jpg",
        width: 1200,
        height: 630,
        alt: "Professionally styled Melbourne home by Presentation Counts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/gallery/01image.jpg"],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <section className="max-w-5xl mx-auto px-6 py-14 flex flex-col">
        <Information />
      </section>
    </div>
  );
}
