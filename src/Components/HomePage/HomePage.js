import About from "./About/About";
import Building from "./Building/Building";
import HeroSection from "./HeroSection/HeroSection";
import Strengths from "./Strengths/Strengths";
import Tech from "./Tech/Tech";
import Contact from "./Contact/Contact";


export default function HomePage() {
  return (
    <>
      <HeroSection />

      <About />

      <Strengths />

      <Building />

      <Tech/>

      <Contact/>
    </>
  );
}
