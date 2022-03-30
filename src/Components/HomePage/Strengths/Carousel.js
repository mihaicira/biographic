import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import { useState, useRef } from "react";

export default function Carousel(props) {
  const [activeCards, setActiveCards] = useState([]);
  const carousel = useRef();
  let onlyOnce = false;
  let memoryActiveCards = [props.cards[0], props.cards[1], props.cards[2]];

  const calcBackwardsIndex = (i) => {
    if (i == 0) return props.cards.length - 1;
    return i - 1;
  };

  const calcForwardIndex = (i) => {
    return (i + 1) % props.cards.length;
  };

  const changeCards = (i) => {
    if (i == 1) return;

    let tempArray;
    if (i == 2) {
      //forward
      tempArray =
        activeCards.length == 0 ? [...memoryActiveCards] : [...activeCards];
      // console.log("[forwards] before: ", tempArray);
      tempArray.shift();
      console.log(tempArray[1]);
      tempArray.push(props.cards[calcForwardIndex(tempArray[1].id)]);
      // console.log("[forwards] after: ", tempArray);
    } else {
      //backward

      tempArray =
        activeCards.length == 0 ? [, ...memoryActiveCards] : [, ...activeCards];
      // console.log("[backward] before: ", tempArray);
      tempArray.pop();
      tempArray[0] = props.cards[calcBackwardsIndex(tempArray[1].id)];
      // console.log("[backward] after: ", tempArray);
    }
    setActiveCards(tempArray);

    return;
  };

  useEffect(() => {
    setActiveCards([props.cards[0], props.cards[1], props.cards[2]]);

    carousel.current.addEventListener("mouseenter", () => {
      if (!onlyOnce) {
        changeCards(2);
        onlyOnce = true;
      }
    });
  }, []);

  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        className="strength-carousel"
        ref={carousel}
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
