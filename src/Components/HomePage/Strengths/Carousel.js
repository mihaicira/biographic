import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import { useState, useRef } from "react";

export default function Carousel(props) {
  const [activeCards, setActiveCards] = useState([]);

  const calcBackwardsIndex = (i) => {
    if (i == 0) return props.cards.length - 1;
    return i - 1;
  };

  const calcForwardIndex = (i) => {
    return (i + 1) % (props.cards.length - 1);
  };

  const changeCards = (idx) => {
    console.log("pressed: ", activeCards[1].id, idx);
    if (1 < idx) {
      //forward
      let tempArray = [...activeCards];

      tempArray.shift();
      tempArray.push(props.cards[calcForwardIndex(tempArray[1].id)]);

      setActiveCards(tempArray);
      return;
    }
    if (1 > idx) {
      //backward
      let tempArray = [, ...activeCards];
      tempArray.pop();
      tempArray[0] = props.cards[calcBackwardsIndex(tempArray[1].id)];
      console.log(tempArray);
      setActiveCards(tempArray);
      return;
    }
  };

  useEffect(() => {
    setActiveCards([props.cards[0], props.cards[1], props.cards[2]]);
    console.log("active cards:", activeCards);
  }, []);

  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        className="strength-carousel"
      >
        {activeCards.map((c, i) => (
          <Card
            key={c.title}
            title={c.title}
            img={c.img}
            text={c.text}
            className={i == 0 ? "leftCard" : i == 2 ? "rightCard" : null}
            onClick={() => {
              changeCards(i);
            }}
          ></Card>
        ))}
        {/* <Stack
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
        </Stack> */}
      </Stack>
    </>
  );
}

const Card = (props) => (
  <Stack className={props.className} gap="1rem" onClick={props.onClick}>
    <img src={props.img} alt="brave" />
    <h6>{props.title}</h6>
    <p>{props.text}</p>
  </Stack>
);
