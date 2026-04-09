import clsx from "clsx";
import Image from "next/image";

interface Image {
  src: string;
  alt: string;
}

interface Props {
  image: Image;
  quote?: string;
  style?: string;
}

const TestimonialBlockHeader = ({ image, quote, style }: Props) => {
  return (
    <div className="max-w-130 relative">
      <Image
        src={image.src}
        alt={image.alt}
        width={750}
        height={600}
        className={clsx(
          style,
          "object-cover max-w-130 w-full h-80 lg:h-150 mb-6 rounded-xl",
        )}
      />
      {quote && (
        <div className="hidden lg:block absolute -bottom-7 left-40 text-center bg-white py-6  px-5 rounded-sm w-103 h-35">
          <h3 className="text-xl font-bold tracking-tight text-secondary mb-4 italic text-left">
            &quot;{quote}&quot;
          </h3>
        </div>
      )}
    </div>
  );
};

export default TestimonialBlockHeader;
