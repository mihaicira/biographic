import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Waving from "./Waving.js";
import "./Timmy.scss";

var hoverFunction;

function Timmy() {
  const timmy = useRef();

  const scrollEvent = () => {
    let transformValue = window.scrollY / 3;
    timmy.current.style.transform = `translateY(${transformValue}px)`;
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollEvent);
  });

  useEffect(
    () => () => {
      document.removeEventListener("scroll", scrollEvent);
    },
    []
  );
  return (
    <div id="timmyContainer" ref={timmy}>
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
