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
        <div>
          <h3>responsive</h3>
        </div>
        <ResponsiveAnim />
      </div>

      <div className="building-container">
        <ServerlessAnim />

        <div>
          <h3>serverless</h3>
        </div>
      </div>

      <div className="building-container">
        <div>
          <h3>traditional</h3>
        </div>
        <TraditionalAnim />
      </div>
    </div>
  );
}

export default Building;
