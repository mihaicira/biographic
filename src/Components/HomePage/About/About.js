import React, { useEffect, useRef } from "react";
import "./About.scss";
import Divider from "../../../assets/svg/strengths-waves.svg";
import { Stack, Typography } from "@mui/material";
import { AnimationOnScroll } from "react-animation-on-scroll";

function About() {
  const meText = useRef();
  const mePic = useRef();
  const spawnPlace = useRef();
  const experience = useRef();
  // const education = useRef();

  useEffect(() => {
    document.addEventListener("scroll", scrollEvent);
  }, []);

  const scrollEvent = () => {
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
        {/* <AnimationOnScroll
          animateIn="animate__fadeOutDown"
          offset={50}
          duration={2}
          delay={1}
        > */}
        <h5>who am I</h5>
        {/* </AnimationOnScroll> */}

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
            <img
              ref={mePic}
              id="mePic"
              src="https://scontent.ftsr1-2.fna.fbcdn.net/v/t39.30808-1/245582200_1714124032127017_8508514677075839217_n.jpg?stp=c0.292.1429.1429a_dst-jpg_s160x160&_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeEN_-GqjAOxi36uRoDWpqmrXJz5qccx2B1cnPmpxzHYHVD6sbYog9MQ2vbBPyj2K_P2r3-cFhvmFLIBSkd2FoXe&_nc_ohc=WMFwoVdXu3sAX_yoBXd&_nc_ht=scontent.ftsr1-2.fna&oh=00_AT_m8Hsdbmi9HuuUKxmABIvVi4Y64VME-HATMOwZjJkeBg&oe=624A39A4"
            />
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
              <p>Nationality: Romanian</p>
              <p>Date of birth: 29 May 2000</p>
            </Stack>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeInUp">
            <Stack direction="column" id="experience">
              <h5>experience</h5>
              <p>Web Development (Internship) at Crafting Software</p>
              <span>from February 2022</span>

              <p>Mobile Development (Internship) at [e-spres-oh]</p>
              <span>from August 2020 to December 2020</span>

              <p>Web Developer (Volunteer) at Classroom Laboratory (UVT)</p>
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
