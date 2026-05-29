import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you were looking for could not be found.",
  robots: { index: false },
};

const NotFound = () => {
  return (
    <div className="text-white mt-4">
      <h1 className="font-bold text-center text-3xl mb-3">404 Not found</h1>
      <p className="text-center text-xl">
        Sorry, we couldn't find the page you're looking for.{" "}
      </p>
    </div>
  );
};

export default NotFound;
