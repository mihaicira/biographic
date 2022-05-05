import React, { useEffect, useRef } from "react";
import "./About.scss";
import Divider from "../../../assets/svg/strengths-waves.svg";
import { Stack, Typography } from "@mui/material";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Mihai from "../../../assets/img/mihai_bigpic.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function About() {
  const meText = useRef();
  const mePic = useRef();
  const spawnPlace = useRef();
  const experience = useRef();

  useEffect(() => {
    document.addEventListener("scroll", scrollEvent);
  }, []);

  useEffect(
    () => () => {
      document.removeEventListener("scroll", scrollEvent);
    },
    []
  );

  const scrollEvent = () => {
    if (window.innerWidth < 750) return;

    const Y = window.scrollY;

    let transitionValue = Y / 40;

    mePic.current.style.transform = `translateX(-${transitionValue}%)`;
    meText.current.style.transform = `translateX(${transitionValue}%)`;

    transitionValue = Y / 30 - 30;

    let education = document.getElementById("educationCard");
    let spawnPlace = document.getElementById("spawnPlace");
    let experience = document.getElementById("experience");

    spawnPlace.style.transform = `translateY(-${transitionValue}%)`;
    experience.style.transform = `translateY(${transitionValue}%)`;
    education.style.transform = `translateY(-${transitionValue}%)`;
  };

  return (
    <div className="section" id="about-section">
      <Stack>
        <img src={Divider} id="about-divider" />
      </Stack>

      <Typography
        variant="h4"
        sx={{ marginBottom: "5rem", textAlign: "right", marginRight: "5rem" }}
      >
        ABOUT
      </Typography>

      <Stack
        alignItems="center"
        justifyContent="center"
        direction="column"
        gap="5rem"
      >
        <h5>who am I</h5>

        <Stack
          alignItems="center"
          justifyContent="space-around"
          direction="row"
          flexWrap="wrap"
          gap="10rem"
          className="about"
          sx={{ width: "100%" }}
        >
          <AnimationOnScroll animateIn="animate__fadeInLeft">
            <p id="meText" ref={meText}>
              A highly motivated 3rd-year Computer Science student looking for
              experience to learn, be challenged, and develop my skills. I have
              been coding since high school, building a great variety of
              programs, such as Sudoku solvers and various games using C++ or
              Python. I participated in the Zero Robotics Competition and
              managed to qualify in the semi-finals, with my team made up of
              fellow classmates. At the beginning of 2020, I have taught Python
              language to a group of 9th-grade students. I have experience in
              web development, mobile development, and software development and
              I'm mainly interested in finding a junior position as a web
              developer that will take advantage of my acknowledgment and help
              me grow professionally. I am involved in many web projects and I'm
              looking forwards to being part of as many interesting projects as
              I can.
            </p>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeInRight">
            <Stack ref={mePic} gap="1rem" id="mePicContainer">
              <img id="mePic" src={Mihai} />
              <Stack
                alignItems="center"
                justifyContent="space-evenly"
                direction="row"
                sx={{
                  width: "100%",
                  color: "white",
                }}
              >
                <button
                  onClick={() => {
                    window
                      .open("https://www.linkedin.com/in/mihaicira/", "_blank")
                      .focus();
                  }}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </button>

                <button
                  onClick={() => {
                    window
                      .open("https://www.facebook.com/mihai.cira.7", "_blank")
                      .focus();
                  }}
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </button>

                <button
                  onClick={() => {
                    window
                      .open("https://twitter.com/mihai291291", "_blank")
                      .focus();
                  }}
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </button>

                <button
                  onClick={() => {
                    window
                      .open("https://github.com/mihaicira", "_blank")
                      .focus();
                  }}
                >
                  <FontAwesomeIcon icon={faGithub} />
                </button>
              </Stack>
            </Stack>
          </AnimationOnScroll>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          className="aboutMeCardsContainer"
          flexWrap="wrap"
          gap="1rem"
          sx={{ width: "100%", textAlign: "center", color: "white" }}
        >
          <AnimationOnScroll animateIn="animate__fadeInLeft">
            <Stack direction="column" id="spawnPlace">
              <h5>spawn place</h5>
              <p>Country: Romania</p>
              <p>City: Timișoara</p>
              <p>Availability: from anywhere</p>
              <p>Way of working: Remote / hybrid / on-site</p>
            </Stack>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeInUp">
            <Stack direction="column" id="experience">
              <h5>experience</h5>
              <p>Web and Mobile Development at Crafting Software</p>
              <span>starting from February 2022</span>

              <p>Mobile Development (Internship) at [e-spres-oh]</p>
              <span>from August 2020 to December 2020</span>

              <p>
                Web Development (Volunteer) at Classroom Laboratory (West
                University of Timișoara)
              </p>
              <span>from November 2019 to January 2022</span>
            </Stack>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeInRight">
            <Stack direction="column" id="educationCard">
              <h5>education</h5>
              <p>Highschool: Carmen Sylva College</p>
              <span>Specialization: Mathematics and Computer Science</span>
              <span>September 2015 - July 2019</span>
              <p>University: West University of Timișoara</p>
              <span>Faculty: Faculty of Mathematics and Computer Science</span>
              <span>Specialization: Computer Science</span>
              <span>September 2019 - present</span>
            </Stack>
          </AnimationOnScroll>
        </Stack>
      </Stack>
    </div>
  );
}

export default About;
