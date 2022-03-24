import { Stack } from "@mui/material";
import ParticleBackground from "./ParticleBackground";
import TypewriterComponent from "typewriter-effect";
import Timmy from "./Timmy/Timmy";

function HeroSection() {
  return (
    <>
      <ParticleBackground />

      <Stack
        sx={{
          position: "absolute",
          top: "30%",
          left: "10%",
          ["@media (max-width:800px)"]: {
            top: "5%",
          },
        }}
      >
        <h1>
          <TypewriterComponent
            options={{
              strings: [
                "I am Mihai Cîra",
                "Web developer",
                "Mobile developer",
                "Problem solver",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <h6>FULLSTACK DEVELOPER</h6>
        <h6>21 YEARS OLD</h6>
      </Stack>

      {/* <Timmy /> */}
    </>
  );
}

export default HeroSection;
