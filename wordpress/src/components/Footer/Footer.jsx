import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "@mui/material";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <Box
        bgcolor="text.secondary"
        color="white"
        position="absolute"
        bottom="0px"
        width="100%"
        height="5rem"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={4} sm={3}>
              <Box>
                <Link href="https://instagram.com/" target="_blanc">
                  <InstagramIcon />
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box>
                <Link href="https://facebook.com/" target="_blanc">
                  {" "}
                  <FacebookIcon />
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box>
                <Link href="https://twitter.com/" target="_blanc">
                  <TwitterIcon />
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box>
                <Link href="https://www.linkedin.com/" target="_blanc">
                  {" "}
                  <LinkedInIcon />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
