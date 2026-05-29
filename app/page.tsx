import Hero from "./components/Hero";
import Information from "./components/Information";

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
