import About from './About/About';
import Building from './Building/Building';
import HeroSection from './HeroSection/HeroSection';
import Strengths from './Strengths/Strengths';
import Tech from './Tech/Tech';
import Contact from './Contact/Contact';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <Navbar>
        <a href="">About me</a>
        <a href="">Strenghts</a>
        <Link to="/skills">Skills</Link>
        <Link to="/skills">Projects</Link>
        <a href="">Contact</a>
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
