import Hero from "./components/Hero";
import Information from "./components/Information";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <div className="max-w-5xl mx-auto px-6 py-14 flex flex-col">
        <Information />
      </div>
    </main>
  );
}
