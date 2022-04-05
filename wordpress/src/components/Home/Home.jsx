import './Home.css';
import React from 'react';

import Button from '@mui/material/Button';


export default function Home() {
  return (
    <div className='homeContainer'>
      <div className='overlay'>
          <div className='homeText'>
            {/* <h1>Our App Title and Logo</h1> */}
            <h3>Let's Share your Space. The only blog that broadens your horizon and makes you know, see and be the change you desire in yourself and the community!</h3>
            </div>
        <Button variant="contained" href="../login/">
          Learn More
        </Button>
        </div>
       
    </div>
  )
}

