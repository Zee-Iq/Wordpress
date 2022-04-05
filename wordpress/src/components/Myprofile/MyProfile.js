import Button from "@mui/material/Button";
import React from "react";
import "./myprofile.css";
import {Link} from "react-router-dom"

export default function MyProfile() {
  return (
    <div className="profile-container">
      <div className="info">
        <div className="avatar">Avatar</div>
        <h3>Name</h3>
        <p>Some text</p>
        <p>some other text</p>
        <Link to='editprofile' style={{
          textDecoration: "none"
        }}> <Button className="button" variant="contained">Edit Profile</Button></Link>
       
      </div>
    </div>
  );
}
