import Link from "next/link";
import BeforeAfter from "./components/beforeAfter";
import { Metadata } from "next";

const MakeoverGalleryPage = () => {
  return (
    <main className=" text-white py-16">
      <div className=" mx-auto px-6">
        <header className="text-center space-y-6 max-w-3xl mx-auto ">
          <p className="text-base md:text-lg text-gray-300  ">
            In conjunction with our sister company &quot;Urban Renewal&quot; we
            can provide you with an itemised quotation on how best to makeover
            your property.
          </p>
          <p className="text-base md:text-lg text-gray-300 ">
            We will manage the works using professionals trades, supplying any
            updates you need, ensuring a smooth process, finished on time and
            ready for out to be styled for sale.
          </p>
        </header>

        <section className="max-w-3xl mx-auto mt-12 bg-background/15 rounded-xl p-8 shadow-lg text-sm lg:text-base">
          <h2 className="text-2xl font-semibold mb-4">Our Common Services</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-200 text-xs md:text-base">
            <li>Painting and plastering</li>
            <li>Carpeting, vinyl, and hybrid flooring</li>
            <li>Plumbing</li>
            <li>Electrical</li>
            <li>Pressure washing</li>
            <li>Gardening</li>
            <li>Bath respray</li>
          </ul>
          <p className="mt-4 text-gray-300">
            Need something else? Just ask us and we’ll see how we can help!
          </p>
          <Link
            href="tel:0420 254 767"
            className="inline-block mt-6 px-6 py-3 bg-background/60 hover:bg-background/80 rounded-lg font-semibold transition-colors"
          >
            Call Us: 0420 254 767
          </Link>
        </section>
        <BeforeAfter />
      </div>
    </main>
  );
};

export default MakeoverGalleryPage;

export const metadata: Metadata = {
  title: "Makeover gallery",
  description:
    "See stunning before and after property makeovers by Presentation Counts.",

  openGraph: {
    title: "Makeover gallery | Presentation Counts",
    description:
      "Stunning before and after property transformations in Melbourne. See how we prepare homes for sale.",
  },
};
