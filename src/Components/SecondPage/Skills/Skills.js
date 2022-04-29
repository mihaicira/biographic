import { Stack } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import './Skills.scss';
import Arrow from '../../../assets/img/arrow.png';

export default function Skills() {
  const techStack = useRef();
  const webDevRef = useRef();
  const softEngRef = useRef();
  const mobileDevRef = useRef();

  useEffect(() => {
    document.addEventListener('scroll', scrollEvent);
  }, []);

  const scrollEvent = () => {
    const Y = window.scrollY;
    techStack.current.style.opacity = Y > 400 ? '0' : '1';
    if (Y < 450 || Y > 1650) {
      webDevRef.current.style.opacity = '0';
      softEngRef.current.style.opacity = '0';
      mobileDevRef.current.style.opacity = '0';
    } else if (Y > 1250) {
      webDevRef.current.style.opacity = '0';
      softEngRef.current.style.opacity = '0';
      mobileDevRef.current.style.opacity = '1';
    } else if (Y >= 850) {
      webDevRef.current.style.opacity = '0';
      softEngRef.current.style.opacity = '1';
      mobileDevRef.current.style.opacity = '0';
    } else if (Y >= 450) {
      webDevRef.current.style.opacity = '1';
      softEngRef.current.style.opacity = '0';
      mobileDevRef.current.style.opacity = '0';
    }
  };

  return (
    <div className="skills-container">
      <Stack
        sx={{
          width: 'max-content',
          margin: '20vh 0 0 10vw',
        }}
      >
        <p>using theese</p>
        <h2>skills</h2>
      </Stack>

      <h2 className="techStack" ref={techStack}>
        tech stack
      </h2>

      <button
        id="scrollBtn"
        onClick={() => {
          window.scrollTo(0, 450);
        }}
      >
        <svg
          width="15"
          height="83"
          viewBox="0 0 15 83"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 0V81.5M8 81.5L14.5 72M8 81.5L1 72" stroke="red" />
        </svg>
      </button>

      <Stack className="subpages">
        <Stack
          justifyContent="center"
          gap="4rem"
          className="webdev-subpage"
          ref={webDevRef}
        >
          <h2>web development</h2>
          <div>
            <p>World Wide Web structuring: HTML</p>
            <p>HTML Format: CSS, SASS</p>
            <p>Programming language: JavaScript</p>
            <p>
              User Interface JS Library: React (State, Context, Redux, Hooks,
              Styled components, Class / Functional components, Router, React
              Three Fiber [3D Modelling])
            </p>
            <p>APIs / Tools: Google Firebase, Google Analytics</p>
            <p>Back-end development: Node.js</p>
            <p>Other JS libraries: jQuery</p>
            <p>Other web technologies: TCP, UDP, HTTP Requests</p>
          </div>
        </Stack>

        <Stack
          justifyContent="center"
          gap="4rem"
          className="software-subpage"
          ref={softEngRef}
        >
          <h2>software engineering</h2>
          <div>
            <p>Object-oriented programming languages:</p>

            <ul>
              <li>Javascript;</li>
              <li>Python;</li>
              <li>Java;</li>
              <li>C#;</li>
              <li>Ruby;</li>
            </ul>

            <p>Procedure-oriented programming languages:</p>

            <ul>
              <li>C;</li>
            </ul>

            <p>Functional programming languages:</p>

            <ul>
              <li>Elixir;</li>
              <li>CLISP;</li>
              <li>Jess;</li>
            </ul>

            <p>Scientific programming languages:</p>

            <ul>
              <li>R;</li>
            </ul>
          </div>
        </Stack>

        <Stack
          justifyContent="center"
          gap="4rem"
          className="mobile-subpage"
          ref={mobileDevRef}
        >
          <h2>mobile development</h2>
          <div>
            <p>iOS development:</p>

            <ul>
              <li>Swift;</li>
              <li>SwiftUI Library;</li>
              <li>Firebase iOS SDK;</li>
              <li>NextStep UserDefaults;</li>
            </ul>

            <p style={{ marginTop: '3rem' }}>Looking forward to learn:</p>
            <ul>
              <li>React Native;</li>
            </ul>
          </div>
        </Stack>
      </Stack>
    </div>
  );
}
