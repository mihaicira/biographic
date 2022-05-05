import React from "react";
import "./SecondPage.scss";
import Skills from "./Skills/Skills";
import Navbar from "../Navbar/Navbar";
import Projects from "./Projects/Projects";
import { Link } from "react-router-dom";

export default function SecondPage() {
  return (
    <section id="secondPage">
      <Navbar>
        <Link to="/">Home</Link>
        <a href="/#about-section">About me</a>
        <a href="#projects">Projects</a>
        <a href="/#contact-section">Contact</a>
      </Navbar>
      <Skills />
      <Projects />
    </section>
  );
}
