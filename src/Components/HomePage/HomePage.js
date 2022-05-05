import About from "./About/About";
import Building from "./Building/Building";
import HeroSection from "./HeroSection/HeroSection";
import Strengths from "./Strengths/Strengths";
import Tech from "./Tech/Tech";
import Contact from "./Contact/Contact";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    document.title = "Mihai's Website";
  });
  return (
    <>
      <Navbar>
        <a href="#about-section">About me</a>
        <a href="#strength-section">Strenghts</a>
        <Link to="/tech">Skills</Link>
        <a href="/tech#projects">Projects</a>
        <a href="#contact-section">Contact</a>
      </Navbar>

      <HeroSection />

      <About />

      <Strengths />

      <Building />

      <Tech />

      <Contact />
    </>
  );
}
