import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

//test



export default function Faq() {
  return (
    <div style={{ height: 350, width: '100%' }}>
      <CssBaseline />
      <Container maxWidth="md">
        <Box >
        <Typography 
            variant="h4" gutterBottom gutterTop
            md={{ width: '100%', flexShrink: 0 }}>
            Frequently Asked Questions
        </Typography>
        <Divider />
        <Typography variant='h8'
            gutterBottom marginLeft={4}
            sx={{ width: '100%', flexShrink: 0, padding: '5' }}
        > 
        <h2>What is our App and Our Mission about?</h2>
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus adipisci provident maxime molestiae possimus velit, ullam blanditiis hic sed fuga odio obcaecati voluptatibus, voluptates iure minus unde, sunt nihil eaque.</p>
        
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt distinctio nisi quis nemo, atque omnis cupiditate sunt, officiis voluptatem nesciunt voluptates. Architecto suscipit beatae sit alias obcaecati, repudiandae magni dignissimos?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

        </Typography>
        <br/>
        <Divider />
        <Typography variant='h8'
            gutterBottom marginLeft={4}
            sx={{ width: '100%', flexShrink: 0 }}
        > 
        <h2>Is the Blog free or by Subscription?</h2>
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus adipisci provident maxime molestiae possimus velit, ullam blanditiis hic sed fuga odio obcaecati voluptatibus, voluptates iure minus unde, sunt nihil eaque.</p>
        
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt distinctio nisi quis nemo, atque omnis cupiditate sunt, officiis voluptatem nesciunt voluptates. Architecto suscipit beatae sit alias obcaecati, repudiandae magni dignissimos?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </Typography>
        <Divider />
        <Typography variant='h8'
            gutterBottom marginLeft={4}
            sx={{ width: '100%', flexShrink: 0 }}
        > 
        <h2>How to send Blog Articles?</h2>
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus adipisci provident maxime molestiae possimus velit, ullam blanditiis hic sed fuga odio obcaecati voluptatibus, voluptates iure minus unde, sunt nihil eaque.</p>
        
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt distinctio nisi quis nemo, atque omnis cupiditate sunt, officiis voluptatem nesciunt voluptates. Architecto suscipit beatae sit alias obcaecati, repudiandae magni dignissimos?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

        </Typography>
        <Divider />
        <Typography variant='h8'
            gutterBottom marginLeft={4}
            sx={{ width: '100%', flexShrink: 0 }}
        > 
        <h2>Reporting Blog Articles?</h2>
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus adipisci provident maxime molestiae possimus velit, ullam blanditiis hic sed fuga odio obcaecati voluptatibus, voluptates iure minus unde, sunt nihil eaque.</p>
        
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt distinctio nisi quis nemo, atque omnis cupiditate sunt, officiis voluptatem nesciunt voluptates. Architecto suscipit beatae sit alias obcaecati, repudiandae magni dignissimos?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

        </Typography>
        </Box>
      </Container>
    </div>
  );
}
