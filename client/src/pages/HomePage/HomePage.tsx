import Hero from "./components/Hero";
import HeroReveal from "./components/HeroReveal";
import VisitUs from "./components/VisitUs";

const HomePage = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <Hero />
      <HeroReveal />
      {/* <VisitUs /> */}
    </section>
  );
};

export default HomePage;
