import React, { useEffect, useRef, useState } from 'react';
import './Navbar.scss';
import { Stack } from '@mui/material';

export default function Navbar(props) {
  const navbar = useRef();
  const [isHidden, setIsHidden] = useState(null);

  useEffect(() => {
    document.addEventListener('scroll', scrollEvent);
  }, []);

  const scrollEvent = () => {
    const SCROLL_FLAG = 500;
    if (
      window.scrollY > SCROLL_FLAG &&
      (isHidden == false || isHidden == null)
    ) {
      if (isHidden == null) setIsHidden(true);
      navbar.current.style.transform = 'translateY(-2cm)';
    }

    if (
      window.scrollY <= SCROLL_FLAG &&
      (isHidden == true || isHidden == null)
    ) {
      if (isHidden == null) setIsHidden(false);
      navbar.current.style.transform = 'translateY(0%)';
    }
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      direction="row"
      gap="1.5rem"
      className="navbar"
      flexWrap="wrap"
      ref={navbar}
    >
      {props.children}
    </Stack>
  );
}
