import "./Tech.scss";
import { useRef, useEffect } from "react";
import { Stack } from "@mui/material";
import ReactSvg from "./ReactSvg/ReactSvg";
import Firebase from "../../../assets/img/firebase.png";
import Nodejs from "../../../assets/img/nodejs.png";
import Postgresql from "../../../assets/img/postgresql.png";
import Threejs from "../../../assets/img/threejs.png";
import Phoenix from "../../../assets/img/phoenix.png";
import Materialui from "../../../assets/img/materialui.png";
import Jquery from "../../../assets/img/jquery.png";
import Mongodb from "../../../assets/img/mongodb.png";

export default function Tech() {
  const using = useRef();
  const pic = useRef();

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

    let transformValue = Y / 30 - 150;

    using.current.style.transform = `translateX(-${transformValue}%)`;

    transformValue = Y / 30;

    // pic.current.style.transform = `translateX(${transformValue}%)`;
  };

  return (
    <div className="section" id="tech-section">
      <Stack direction="column" alignItems="center" justifyContent="center">
        <h2 ref={using}>using...</h2>
        <div ref={pic}>
          <ReactSvg />
        </div>
        <h6 style={{ marginTop: "4rem" }}>... and</h6>
      </Stack>

      <Stack
        direction="row"
        flexWrap="wrap"
        gap="4rem"
        alignItems="center"
        justifyContent="center"
      >
        <a href="https://firebase.google.com/" target="_blank">
          <img src={Firebase} />
        </a>

        <a href="https://nodejs.org/en/" target="_blank">
          <img src={Nodejs} />
        </a>

        <a href="https://www.postgresql.org/" target="_blank">
          <img src={Postgresql} />
        </a>

        <a href="https://www.mongodb.com/" target="_blank">
          <img src={Mongodb} />
        </a>

        <a href="https://mui.com/" target="_blank">
          <img src={Materialui} />
        </a>

        <a href="https://jquery.com/" target="_blank">
          <img src={Jquery} />
        </a>

        <a href="https://phoenixframework.org/" target="_blank">
          <img src={Phoenix} />
        </a>

        <a href="https://threejs.org/" target="_blank">
          <img src={Threejs} />
        </a>
      </Stack>
    </div>
  );
}
