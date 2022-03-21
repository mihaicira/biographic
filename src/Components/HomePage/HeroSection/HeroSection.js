import { Stack } from "@mui/material";
import ParticleBackground from "../../../ParticleBackground";
import TypewriterComponent from "typewriter-effect";

function HeroSection() {
  return (
    <>
      <ParticleBackground />

      <Stack
        sx={{
          position: "absolute",
          top: "30%",
          left: "10%",
        }}
      >
        <h1>
          <TypewriterComponent
            options={{
              strings: [
                "Mihai Cîra",
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
    </>
  );
}

export default HeroSection;
