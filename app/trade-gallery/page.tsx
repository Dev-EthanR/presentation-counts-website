import Link from "next/link";
import React from "react";
import ImageComparisonSlider from "./components/ImageComparisonSlider";
import Image from "next/image";

const TradeGallery = () => {
  return (
    <div className="text-center text-white">
      <h1 className="text-6xl font-light text-white py-4 font-shelley mb-6">
        Trade Gallery
      </h1>
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-center text-base leading-relaxed text-white/80 mb-12">
          Preparing your property before sale is the best way to maximise the
          value. Our works range from painting to plastering, carperting,
          flooring to gardening and plumbing. give us a call and we can advice
          what your property needs to maximise the value
          <Link className="block mt-4" href="tel:0420 254 767">
            Ph: 0420 254 767
          </Link>
        </p>
        <ImageComparisonSlider
          beforeSrc={"/images/before-after/01before.png"}
          afterSrc={"/images/before-after/01after.png"}
        />
        <div className="grid grid-cols-2 gap-x-2 mt-4">
          <Image
            className="w-full"
            src={"/images/before-after/01before.png"}
            alt={""}
            width={160}
            height={160}
          />
          <Image
            className="w-full"
            src={"/images/before-after/01after.png"}
            alt={""}
            width={160}
            height={160}
          />
        </div>
      </div>
    </div>
  );
};

export default TradeGallery;
