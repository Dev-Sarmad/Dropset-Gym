import BentoGrid from "./components/BentoGrid";
import Details from "./components/Details";
import Featured from "./components/Featured";
import Heading from "./components/Heading";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Testimonials from "./components/Testimonials";
import Text from "./components/Text";

function App() {
  return (
    <>
      <Navigation />
      <Heading
        headline="Serious tracking for serious gym workouts."
        className="text-left px-4 text-4xl mt-20 font-bold md:text-8xl md:mt-32 lg:text-9xl lg:tracking-wider"
      />
      <Hero />
      <Text text="Athletic" direction="left" />
      <Text text="by design" direction="right" />
      <BentoGrid />
      <Details />
      <Featured />
      <Testimonials />
    </>
  );
}

export default App;
