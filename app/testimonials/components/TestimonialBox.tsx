import clsx from "clsx";

interface Props {
  text: string;
  author: string;
  style?: string;
}

const TestimonialBox = ({ text, author, style }: Props) => {
  return (
    <div
      className={clsx(
        style,
        "bg-white w-full h-full space-y-7 p-5 flex flex-col justify-between rounded-lg shadow-sm shadow-background",
      )}
    >
      <p className="italic text-secondary/60 font-semibold">
        &quot;{text}&quot;
      </p>
      <p className="font-semibold text-lg">{author}</p>
    </div>
  );
};

export default TestimonialBox;
