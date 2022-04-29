import React from 'react';
import './SecondPage.scss';
import Skills from './Skills/Skills';
import Navbar from '../Navbar/Navbar';
import Projects from './Projects/Projects';

export default function SecondPage() {
  return (
    <section id="secondPage">
      <Navbar>
        <a href="">About me</a>
        <a href="">Strenghts</a>
        <a href="">Contact</a>
      </Navbar>
      <Skills />
      <Projects />
    </section>
  );
}
