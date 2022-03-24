import "./Strengths.scss";
import Divider from "../../../assets/svg/strengths-waves.svg";
import Brave from "../../../assets/img/brave.png";
import Frank from "../../../assets/img/frank.png";
import Passionate from "../../../assets/img/passionate.png";
import Teamplayer from "../../../assets/img/teamplayer.png";
import Empathetic from "../../../assets/img/empathetic.png";
import { Typography } from "@mui/material";
// import Carousel from "./Carousel";
import Carousel from "nuka-carousel";

function Strengths() {
  const cards = [
    {
      img: Brave,
      title: "Brave",
      text: "You think out of the box and you are not afraid to stand up and share your ideas",
    },
    {
      img: Frank,
      title: "Frank",
      text: "You believe that speaking clearly is the key for great communication and you are open to constructive feedback. Don’t be touchy, be smart! You can always improve yourself",
    },
    {
      img: Passionate,
      title: "Passionate",
      text: "Love for technology burns your soul and you are not afraid to look beyond your skills",
    },
    {
      img: Teamplayer,
      title: "Teamplayer",
      text: "You believe that you can go solo, but successes are real only when shared with your team",
    },
    {
      img: Empathetic,
      title: "Empathetic",
      text: "If you believe that emotions are what makes us humans and being in other’s shoes sometimes can make you change perspective.",
    },
  ];

  return (
    <>
      <div className="section" id="strength-section">
        <img src={Divider} id="strength-divider" />
        <Typography
          variant="h4"
          sx={{ marginBottom: "5rem", textAlign: "right", marginRight: "5rem" }}
        >
          STRENGTHS
        </Typography>

        {/* <Carousel cards={cards} /> */}
        <Carousel>
          <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide1" />
          <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide2" />
          <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide3" />
          <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide4" />
          <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide5" />
          <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide6" />
        </Carousel>
      </div>
    </>
  );
}

export default Strengths;
