import React from "react";
import "./Building.scss";
import ResponsiveAnim from "./ResponsiveAnim";
import ServerlessAnim from "./ServerlessAnim";
import TraditionalAnim from "./TraditionalAnim";
import { Stack } from "@mui/material";

function Building() {
  return (
    <div className="section" id="buildingSection">
      <Stack
        id="building-title"
        alignItems="center"
        justifyContent="center"
        direction="row"
        flexWrap="wrap"
      >
        <h2>BUILDING</h2>
        <h6>... and mentaining</h6>
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
