import React from 'react';
import './Thanks.scss';
import { Stack } from '@mui/material';
import Navbar from '../Navbar/Navbar';
import { Link } from '@mui/material';

export default function Thanks() {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      direction="column"
      gap="1rem"
      sx={{ paddingTop: '5rem' }}
    >
      <Navbar>
        <Link to="/">Home</Link>
        <a href="">Strenghts</a>
        <a href="">Contact</a>
      </Navbar>
      <h1>Thank you for your like</h1>

      <h6>Here's a walking dog.</h6>

      <div class="dog-container">
        <div class="bk">
          <div class="mid">
            <div class="fore">
              <div class="figure"></div>
            </div>
          </div>
        </div>
      </div>
    </Stack>
  );
}
