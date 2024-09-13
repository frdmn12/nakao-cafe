import Hero from "../components/ui/Hero";
import HeroReveal from "../components/ui/HeroReveal";

const HomePage = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <Hero />
      <HeroReveal />
    </section>
  );
};

export default HomePage;
