import React from "react";
import { Stack } from "@mui/material";
import { useState, useRef } from "react";

export default function Carousel(props) {
  const [currentCardIdx, setCurrentCardIdx] = useState(
    Math.floor(props.cards.length / 2)
  );

  const prevRef = useRef();
  const currentRef = useRef();
  const nextRef = useState();

  const calcBehindIndex = () => {
    if (currentCardIdx == 0) return props.cards.length - 1;
    return currentCardIdx - 1;
  };

  const calcForwardIndex = () => {
    return (currentCardIdx + 1) % (props.cards.length - 1);
  };

  const prevCard = () => {
    return props.cards[calcBehindIndex()];
  };

  const currentCard = () => {
    return props.cards[currentCardIdx];
  };

  const nextCard = () => {
    return props.cards[calcForwardIndex()];
  };

  function goForward() {
    setCurrentCardIdx(calcForwardIndex());
  }

  function goBackwards() {
    setCurrentCardIdx(calcBehindIndex());
  }

  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        className="strength-carousel"
      >
        <Stack
          className="strength-card"
          gap="1rem"
          ref={prevRef}
          onClick={goBackwards}
        >
          <img src={prevCard().img} alt="brave" />
          <h6>{prevCard().title}</h6>
          <p>{prevCard().text}</p>
        </Stack>

        <Stack className="strength-card" gap="1rem" ref={currentRef}>
          <img src={currentCard().img} alt="brave" />
          <h6>{currentCard().title}</h6>
          <p>{currentCard().text}</p>
        </Stack>

        <Stack
          className="strength-card"
          gap="1rem"
          ref={nextRef}
          onClick={goForward}
        >
          <img src={nextCard().img} alt="brave" />
          <h6>{nextCard().title}</h6>
          <p>{nextCard().text}</p>
        </Stack>
      </Stack>
    </>
  );
}
