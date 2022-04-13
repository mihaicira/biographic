import React from 'react'
import "./Contact.scss"
import Divider from "../../../assets/svg/contact-divider.svg"
import ThumbsUp from "../../../assets/svg/thumbs_up.svg"
import {Stack} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import emailjs from "emailjs-com";

export default function Contact() {

    const sendEmail = () =>{
        emailjs.send("service_c0zrve8","template_c6iu695",{
            email: "email",
            message: "message",
            date: "date.toString()"
        },'Mpm1e_o9P8YhwFyNt');
        // },'user_T4jIQ0R5325FA0lZ8gMtO');

        //Send emailx
        console.log("email sent");

        
    }
  return (
    <div className="section" id="contact-section">
        <img id="divider" src={Divider}/>

        <Stack alignItems="center" justifyContent="center" direction="column" sx={{ marginBottom: "5rem"}}>
            <h1>contact</h1>
            <a href="">ciramihai291@gmail.com</a>
        </Stack>

        <Stack alignItems="baseline" justifyContent="center" direction="column" className="form" gap="1rem" sx={{marginBottom: "5rem"}}>
            <input placeholder='from'/>
            <textarea placeholder='message'/>
            <button onClick={sendEmail}>submit</button>
        </Stack>

        <Stack alignItems="center" justifyContent="center" direction="column" className="uglybtn" gap="1rem">
            <h1>or...</h1>
            <p>hit this ugly like button if you like this website <FontAwesomeIcon icon={faFaceSmile}/></p>
            <button >
                <img src={ThumbsUp}/>
            </button>
        </Stack>
        

    </div>
  )
}
