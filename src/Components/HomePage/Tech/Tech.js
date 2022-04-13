import './Tech.scss'
import React, {useRef,useEffect} from 'react'
import {Stack} from "@mui/material";

export default function Tech() {
    const using = useRef()
    const pic = useRef()

    useEffect(() => {
        document.addEventListener("scroll", scrollEvent);
      }, []);
    
      const scrollEvent = () => {
        if (window.innerWidth < 750) return;
    
        const Y = window.scrollY;
    
        let transformValue = Y / 80;
    
        using.current.style.transform = `translateX(-${transformValue}%)`;

        transformValue = Y / 30;
    
        pic.current.style.transform = `translateX(${transformValue}%)`;
    
        // responsive.current.firstChild.style.transform = `scale()`
    
        console.log(Y);
      };

  return (
    <div className="section" id="tech-section">
        <Stack direction="column" alignItems="center" justifyContent="center">
            <h2 ref={using}>using...</h2>
            <p ref={pic}>pic</p>
        </Stack>

        <Stack direction="row" flexWrap="wrap" gap="2rem" alignItems="center" justifyContent="center">

            <a href="">
                <p>lorem </p>
            </a>

            <a href="">
                <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
            </a>

            <a href="">
                <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
            </a>

            <a href="">
                <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
            </a>

            <a href="">
                <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
            </a>

            <a href="">
                <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
            </a>


            <a href="">
                <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
            </a>

            <a href="">
                <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
            </a>

            <a href="">
                <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
            </a>

        </Stack>
        
    </div>
  )
}
