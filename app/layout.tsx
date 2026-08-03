import type { Metadata } from "next";
import {
  Inter,
  Cormorant_Garamond,
  Montserrat,
  Roboto_Mono,
} from "next/font/google";
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

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-robotomono",
});

const inter = Inter({
  subsets: ["latin"],
});

const customFont = localFont({
  src: "../public/fonts/Shelley Script LT Std Regular/Shelley Script LT Std Regular.otf",
  variable: "--font-shelley",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.presentationcounts.com"),
  title: {
    default: "Presentation Counts",
    template: "Presentation Counts | %s",
  },
  description:
    "We have extensive experience in the presentation and furnishing of apartments, townhouses, residential developments and family homes.",
  keywords: [
    "property styling Melbourne",
    "home staging Melbourne",
    "property presentation Melbourne",
    "furniture hire Melbourne",
    "real estate staging Melbourne",
    "house staging Melbourne",
    "property stylist Melbourne",
    "styling homes for sale Melbourne",
    "Presentation Counts",
    "Melbourne Property Stylists",
    "Property Styling",
  ],
  icons: {
    icon: "/images/icon.png",
    shortcut: "/images/icon.png",
    apple: "/images/icon.png",
  },
  openGraph: {
    title: "Presentation Counts",
    description:
      "We have extensive experience in the presentation and furnishing of apartments, townhouses, residential developments and family homes.",
    type: "website",
    url: "https://www.presentationcounts.com/",
    siteName: "Presentation Counts",
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
    title: "Presentation Counts — Property Stylists Melbourne",
    description:
      "We have extensive experience in the presentation and furnishing of apartments, townhouses, residential developments and family homes.",
    images: ["/images/gallery/01image.jpg"],
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
        className={`${inter.className} ${customFont.variable} ${cormorant.variable} ${montserrat.variable} ${robotoMono.variable}`}
      >
        <a
          href="#main-content"
          className="sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-secondary focus:rounded focus:font-bold"
        >
          Skip to main content
        </a>
        <div className="flex flex-col min-h-screen bg-[#21241e] font-robotomono">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
                name: "Presentation Counts",
                description:
                  "Property styling and home staging services for Melbourne homeowners preparing to sell. 20+ years experience, 500+ homes styled.",
                url: "https://www.presentationcounts.com",
                telephone: "+61406988011",
                email: "presentationcounts@bigpond.com.au",
                image:
                  "https://www.presentationcounts.com/images/gallery/01image.jpg",
                logo: "https://www.presentationcounts.com/images/icon.png",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Melbourne",
                  addressRegion: "VIC",
                  addressCountry: "AU",
                },
                areaServed: [
                  { "@type": "City", name: "Melbourne" },
                  { "@type": "State", name: "Victoria" },
                ],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Property Styling Services",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Property Styling Melbourne",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Home Staging Melbourne",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Furniture Hire Melbourne",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Property Renovation Melbourne",
                      },
                    },
                  ],
                },
                priceRange: "$$",
                sameAs: ["https://www.instagram.com/presentationcounts/"],
              }),
            }}
          />
          <Header />
          <main className="flex-1" id="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
