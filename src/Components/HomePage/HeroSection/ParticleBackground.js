import React from "react";
import Particles from "react-particles-js";
import ParticleConfig from "../../../config/particle-config";

export default function ParticleBackground() {
  return (
    <Particles
      params={ParticleConfig}
      height={(90 / 100) * window.outerHeight}
    ></Particles>
  );
}
