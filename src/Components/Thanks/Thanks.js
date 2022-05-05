import React from "react";
import "./Thanks.scss";
import { Stack } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import { Link } from "@mui/material";

export default function Thanks() {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      direction="column"
      gap="1rem"
      sx={{ paddingTop: "5rem" }}
    >
      <Navbar sx={{ position: "absolute" }}>
        <a href="/">Home</a>
      </Navbar>
      <h1>Thank you for your like</h1>

      <h6>Here's a walking dog.</h6>

      <div className="dog-container">
        <div className="bk">
          <div className="mid">
            <div className="fore">
              <div className="figure"></div>
            </div>
          </div>
        </div>
      </div>
    </Stack>
  );
}
