import "./Strengths.scss";
import Divider from "../../../assets/svg/strengths-divider.svg";
import Brave from "../../../assets/img/brave.png";
import Frank from "../../../assets/img/frank.png";
import Passionate from "../../../assets/img/passionate.png";
import Teamplayer from "../../../assets/img/teamplayer.png";
import Empathetic from "../../../assets/img/empathetic.png";
import { Typography, Stack } from "@mui/material";
import Carousel from "./Carousel";
import { useEffect, useRef } from "react";

function Strengths() {
  const cards = [
    {
      id: 0,
      img: Brave,
      title: "Brave",
      text: "You think out of the box and you are not afraid to stand up and share your ideas",
    },
    {
      id: 1,
      img: Frank,
      title: "Frank",
      text: "You believe that speaking clearly is the key for great communication and you are open to constructive feedback. Don’t be touchy, be smart! You can always improve yourself",
    },
    {
      id: 2,
      img: Passionate,
      title: "Passionate",
      text: "Love for technology burns your soul and you are not afraid to look beyond your skills",
    },
    {
      id: 3,
      img: Teamplayer,
      title: "Teamplayer",
      text: "You believe that you can go solo, but successes are real only when shared with your team",
    },
    {
      id: 4,
      img: Empathetic,
      title: "Empathetic",
      text: "You believe that emotions are what makes us humans and being in other’s shoes sometimes can make you change perspective.",
    },
  ];

  const strengths = useRef();

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
    if (window.innerWidth < 800) return;

    const Y = window.scrollY;

    let transitionValue = Y / 50 + 15;

    strengths.current.style.letterSpacing = `${transitionValue}px`;
  };

  return (
    <>
      <div className="section" id="strength-section">
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ backgroundColor: "white", outline: "1px solid green" }}
        >
          <Typography
            variant="h4"
            sx={{
              marginBottom: "0",
              p: "2rem 0 2rem 0",
              width: "100%",
              textAlign: "center",
            }}
            ref={strengths}
          >
            STRENGTHS
          </Typography>
        </Stack>
        <Stack>
          <img src={Divider} id="strengths-divider" />
        </Stack>

        <Carousel cards={cards} />
      </div>
    </>
  );
}

export default Strengths;
