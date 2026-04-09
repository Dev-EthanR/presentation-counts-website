import React from "react";

interface Props {
  text: string;
  author: string;
}

const TestimonialBox = ({ text, author }: Props) => {
  return (
    <div className="bg-white w-full h-fit space-y-7 lg:aspect-square p-5 flex flex-col justify-between rounded-lg shadow-sm shadow-background">
      <p className="italic text-secondary/60 font-semibold">
        &quot;{text}&quot;
      </p>
      <p className="font-semibold text-lg">{author}</p>
    </div>
  );
};

export default TestimonialBox;
