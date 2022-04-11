import React from "react";
import "./Building.scss";
import ResponsiveAnim from "./ResponsiveAnim";
import ServerlessAnim from "./ServerlessAnim";
import TraditionalAnim from "./TraditionalAnim";
import { Stack } from "@mui/material";
import { useRef, useEffect } from "react";

function Building() {
  const building = useRef();
  const mentaining = useRef();

  const responsive = useRef();
  const serverless = useRef();
  const traditional = useRef();

  useEffect(() => {
    document.addEventListener("scroll", scrollEvent);
  }, []);

  const scrollEvent = () => {
    if (window.innerWidth < 750) return;

    const Y = window.scrollY;

    let transformValue = Y / 25 - 50;

    building.current.style.transform = `translateY(-${transformValue}%) translateX(${
      transformValue / 2
    }%)`;

    mentaining.current.style.transform = `translateY(${transformValue}%) translateX(-${
      transformValue / 2
    }%)`;

    // responsive.current.firstChild.style.transform = `scale()`

    console.log(Y);
  };

  return (
    <div className="section" id="buildingSection">
      <Stack
        id="building-title"
        alignItems="center"
        justifyContent="center"
        direction="row"
        flexWrap="wrap"
      >
        <h2 ref={building}>BUILDING</h2>
        <h6 ref={mentaining}>... and mentaining</h6>
      </Stack>

      <div className="building-container">
        <div ref={responsive}>
          <h3>
            {Array.from("responsive").map((char, i) => (
              <span key={`responsive-char-${i}`}>{char}</span>
            ))}
          </h3>

          <p>web aplications</p>
        </div>
        <ResponsiveAnim />
      </div>

      <div className="building-container" id="serverless-building-container">
        <ServerlessAnim />

        <div ref={serverless}>
          <h3>
            {Array.from("serverless").map((char, i) => (
              <span key={`serverless-char-${i}`}>{char}</span>
            ))}
          </h3>
          <p>web aplications</p>
        </div>
      </div>

      <div className="building-container">
        <div ref={traditional}>
          <h3>
            {Array.from("traditional").map((char, i) => (
              <span key={`traditional-char-${i}`}>{char}</span>
            ))}
          </h3>
          <p>web aplications</p>
        </div>
        <TraditionalAnim />
      </div>
    </div>
  );
}

export default Building;
