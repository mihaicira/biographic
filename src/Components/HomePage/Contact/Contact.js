import React, { useRef, useState, useEffect } from 'react';
import './Contact.scss';
import Divider from '../../../assets/svg/contact-divider.svg';
import ThumbsUp from '../../../assets/svg/thumbs_up.svg';
import { Stack, Alert } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';

export default function Contact() {
  const from = useRef();
  const text = useRef();
  const [warningAlert, setWarningAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);

  const sendEmail = () => {
    const fromTxt = from.current.value;
    const textTxt = text.current.value;

    if (textTxt == '') {
      setSuccessAlert(false);
      setWarningAlert(true);
      setTimeout(() => {
        setWarningAlert(false);
      }, 6000);
      return;
    }

    const date = new Date();
    emailjs.send(
      'service_c0zrve8',
      'template_c6iu695',
      {
        from: fromTxt,
        text: textTxt,
        date: date.toString(),
      },
      'Mpm1e_o9P8YhwFyNt'
    );

    setWarningAlert(false);
    setSuccessAlert(true);
    setTimeout(() => {
      setSuccessAlert(false);
    }, 6000);
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
        sx={{ marginBottom: '5rem', marginTop: '5rem' }}
      >
        <h1>contact</h1>
        <a href="mailto:ciramihai291@gmail.com">ciramihai291@gmail.com</a>
      </Stack>

      <Stack
        alignItems="baseline"
        justifyContent="center"
        direction="column"
        className="form"
        gap="1rem"
        sx={{ marginBottom: '5rem' }}
      >
        <input placeholder="from" ref={from} />
        <textarea placeholder="message" ref={text} />
        <button onClick={sendEmail}>submit</button>
      </Stack>

      <Stack
        alignItems="center"
        justifyContent="center"
        direction="column"
        className="uglybtn"
        gap="1rem"
      >
        <h1>or...</h1>
        <p>
          hit this ugly like button if you like this website{' '}
          <FontAwesomeIcon icon={faFaceSmile} />
        </p>
        <button>
          <img src={ThumbsUp} />
        </button>
      </Stack>
    </div>
  );
}

function WarningAlert(props) {
  const alert = useRef();
  useEffect(() => {
    alert.current.style.opacity = '1';
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
    alert.current.style.opacity = '1';
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
