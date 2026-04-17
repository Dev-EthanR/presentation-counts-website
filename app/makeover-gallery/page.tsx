import Image from "next/image";
import Link from "next/link";

const MakeoverGalleryPage = () => {
  return (
    <section className=" text-white py-16">
      <div className=" mx-auto px-6">
        <div className="text-center space-y-6 max-w-3xl mx-auto ">
          <p className="text-lg text-gray-300  ">
            In conjunction with our sister company &quot;Urban Renewal&quot; we
            can provide you with an itemised quotation on how best to makeover
            your property.
          </p>
          <p className="text-lg text-gray-300 ">
            We will manage the works using professionals trades, supplying any
            updates you need, ensuring a smooth process, finished on time and
            ready for oit to be styled for sale.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-12 bg-background/15 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Common Services</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-200 text-sm md:text-base">
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/images/before-after/01before.png"
              alt="Before"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
            <p className="text-center mt-2 text-gray-300">Before</p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/images/before-after/01after.png"
              alt="After"
              width={600}
              height={400}
              className=" w-full h-full"
            />
            <p className="text-center mt-2 text-gray-300">After</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeoverGalleryPage;
