import React from "react";
import { Stack } from "@mui/material";
import { useState, useRef } from "react";

export default function Carousel(props) {
  const [currentCard, setCurrentCard] = useState(
    Math.floor(props.cards.length / 2)
  );
  const previousDisplayCard = useRef();
  const currentDisplayCard = useRef();
  const nextDisplayCard = useRef();

  const previousId = (nr) => {
    return currentCard - 1 == -1 ? 6 : currentCard - 1;
  };

  const nextId = (nr) => {
    // console.log((currentCard + 1) % props.cards.length);
    return (currentCard + 1) % props.cards.length;
  };

  const changeToNextCard = () => {
    setCurrentCard(nextId);
  };

  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        className="strength-carousel"
      >
        <Card
          title={props.cards[previousId()].title}
          img={props.cards[previousId()].img}
          text={props.cards[previousId()].text}
          key={props.cards[previousId()].title}
          ref={previousDisplayCard}
          onClick={() => {
            console.log("helo");
          }}
        />
        <Card
          title={props.cards[currentCard].title}
          img={props.cards[currentCard].img}
          text={props.cards[currentCard].text}
          key={props.cards[currentCard].title}
          ref={currentDisplayCard}
          onClick={() => {
            console.log("helo");
          }}
        />
        <Card
          title={props.cards[nextId()].title}
          img={props.cards[nextId()].img}
          text={props.cards[nextId()].text}
          key={props.cards[nextId()].title}
          ref={nextDisplayCard}
          onClick={changeToNextCard}
        />
      </Stack>
    </>
  );
}

const Card = (props) => (
  <Stack
    className="strength-card"
    gap="1rem"
    onClick={props.onClick}
    ref={props.ref}
  >
    <img src={props.img} alt="brave" />
    <h6>{props.title}</h6>
    <p>{props.text}</p>
  </Stack>
);
