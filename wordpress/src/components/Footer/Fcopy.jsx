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

export default function Fcopy() {
  return (
    <div className="footer-container">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        bgcolor="text.secondary"
        color="white"
        position="absolute"
        bottom="0px"
        width="100%"
        height="5rem"
      >
 
       
        <Link
          className="link1"
          href="https://www.linkedin.com/"
          target="_blanc"
        >
          {" "}
          <LinkedInIcon />
        </Link>
        <Link
          className="link1"
          href="https://www.linkedin.com/"
          target="_blanc"
        >
          {" "}
          <LinkedInIcon />
        </Link>
        <Link
          className="link1"
          href="https://www.linkedin.com/"
          target="_blanc"
        >
          {" "}
          <LinkedInIcon />
        </Link>
        <Link
          className="link1"
          href="https://www.linkedin.com/"
          target="_blanc"
        >
          {" "}
          <LinkedInIcon />
        </Link>
     
      </Box>
    </div>
  );
}
