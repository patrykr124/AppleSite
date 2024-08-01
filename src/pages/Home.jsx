import Features from "../components/Features";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import HowItWorks from "../components/HowItWorks";
import Model from "../components/Model";


function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
    </main>
  );
}

export default Home;
