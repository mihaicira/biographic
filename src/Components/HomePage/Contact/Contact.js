import React, { useRef, useState, useEffect } from "react";
import "./Contact.scss";
import Divider from "../../../assets/svg/contact-divider.svg";
import ThumbsUp from "../../../assets/svg/thumbs_up.svg";
import { Stack, Alert } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSadTear as cry,
  faFrown as sad,
  faMeh as meh,
  faSmile as smile,
  faLaughBeam as happy,
  faTimes as exit,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const from = useRef();
  const text = useRef();
  const [warningAlert, setWarningAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  let navigate = useNavigate();

  const sendEmail = () => {
    const fromTxt = from.current.value;
    const textTxt = text.current.value;

    if (textTxt == "") {
      setSuccessAlert(false);
      setWarningAlert(true);
      setTimeout(() => {
        setWarningAlert(false);
      }, 6000);
      return;
    }

    const date = new Date();
    emailjs.send(
      "service_c0zrve8",
      "template_c6iu695",
      {
        from: fromTxt,
        text: textTxt,
        date: date.toString(),
      },
      "Mpm1e_o9P8YhwFyNt"
    );

    setWarningAlert(false);
    setSuccessAlert(true);
    setTimeout(() => {
      setSuccessAlert(false);
    }, 6000);
  };

  const sendRating = (rating) => {
    const date = new Date();
    emailjs.send(
      "service_c0zrve8",
      "template_c6iu695",
      {
        from: "automatic",
        text: `New rating: ${rating}/5!`,
        date: date.toString(),
      },
      "Mpm1e_o9P8YhwFyNt"
    );

    navigate("/thanks");
  };

  return (
    <div className="section" id="contact-section">
      <img id="dividerContact" src={Divider} />

      {warningAlert && (
        <WarningAlert
          close={() => {
            setWarningAlert(false);
          }}
        />
      )}

      {successAlert && (
        <SuccessAlert
          close={() => {
            setSuccessAlert(false);
          }}
        />
      )}

      <Stack
        alignItems="center"
        justifyContent="center"
        direction="column"
        sx={{ marginBottom: "5rem", marginTop: "5rem" }}
      >
        <h1>contact me</h1>
        <a href="mailto:ciramihai291@gmail.com">ciramihai291@gmail.com</a>
      </Stack>

      <Stack
        alignItems="baseline"
        justifyContent="center"
        direction="column"
        className="form"
        gap="1rem"
        sx={{ marginBottom: "5rem" }}
      >
        <input placeholder="from" ref={from} />
        <textarea placeholder="message" ref={text} />
        <button onClick={sendEmail}>submit</button>
      </Stack>

      <Stack
        alignItems="center"
        justifyContent="center"
        direction="column"
        className="feedback"
        gap="1rem"
      >
        <h1>or, since you've come this far...</h1>
        <p style={{ fontSize: "1rem" }}>Rate my website!</p>
        <Stack
          alignItems="center"
          justifyContent="center"
          direction="row"
          gap="2rem"
          sx={{ fontSize: "5rem", color: "white", marginTop: "2rem" }}
        >
          <button
            onClick={() => {
              sendRating(1);
            }}
          >
            <FontAwesomeIcon icon={cry} />
          </button>

          <button
            onClick={() => {
              sendRating(2);
            }}
          >
            <FontAwesomeIcon icon={sad} />
          </button>

          <button
            onClick={() => {
              sendRating(3);
            }}
          >
            <FontAwesomeIcon icon={meh} />
          </button>

          <button
            onClick={() => {
              sendRating(4);
            }}
          >
            <FontAwesomeIcon icon={smile} />
          </button>

          <button
            onClick={() => {
              sendRating(5);
            }}
          >
            <FontAwesomeIcon icon={happy} />
          </button>
        </Stack>
        {/* <button onClick={sendLike}>
          <img src={ThumbsUp} />
        </button> */}
      </Stack>
    </div>
  );
}

function WarningAlert(props) {
  const alert = useRef();
  useEffect(() => {
    alert.current.style.opacity = "1";
  }, []);

  return (
    <Alert
      severity="warning"
      className="alertBox"
      onClose={props.close}
      ref={alert}
    >
      Type something in the message text box.
    </Alert>
  );
}

function SuccessAlert(props) {
  const alert = useRef();
  useEffect(() => {
    alert.current.style.opacity = "1";
  }, []);
  return (
    <Alert
      severity="success"
      className="alertBox"
      onClose={props.close}
      ref={alert}
    >
      The message has been sent. Thank you!
    </Alert>
  );
}
