import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Waving from "./Waving.js";
import "./Timmy.scss";

import { OrbitControls } from "@react-three/drei";

function Timmy() {
  return (
    <div id="timmyContainer">
      <Canvas>
        <ambientLight intensity={0.6} />
        <directionalLight intensity={0.5} />
        <Suspense fallback={null}>
          <Waving />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Timmy;
