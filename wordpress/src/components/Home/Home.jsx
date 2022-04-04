import './Home.css';
import React from 'react';

// import Sidebar from '..Sidebar/Sidebar';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';

export default function Home() {
  return (
    <div className='homeContainer'>
     
      {/* <Sidebar /> */}
     
        <div className='overlay'>
          <div className='homeText'>
            {/* <h1>iBelieve</h1> */}
            <h3>Let's Share your Space. The only blog that broadens your horizon and makes you know, see and be the change you desire in yourself and the community!</h3>
            </div>
        <Button variant="contained" href="../login/">
          Learn More
        </Button>
        </div>
       
    </div>
  )
}

