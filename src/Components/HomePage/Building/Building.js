import React from "react";
import "./Building.scss";
import ResponsiveAnim from "./ResponsiveAnim";

function Building() {
  return (
    <div className="section" id="buildingSection">
      <div id="building-title">
        <h2>BUILDING</h2>
        <h6>... and mentaining</h6>
      </div>

      <div className="building-container">
        <div>
          <h3>responsive</h3>
        </div>
        <ResponsiveAnim />
      </div>

      <div className="building-container">
        <h2>svg</h2>

        <div>
          <h3>serverless</h3>
        </div>
      </div>

      <div className="building-container">
        <div>
          <h3>traditional</h3>
        </div>
        <h2>svg</h2>
      </div>
    </div>
  );
}

export default Building;
