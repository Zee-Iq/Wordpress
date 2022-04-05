import React from "react";
import Button from "@mui/material/Button";
import { Grid, TextField, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import "../Myprofile/myprofile.css";
import "./edit.css";

export default function Editprofile() {
  return (
    <div className="edit-container">
      <div className="info">
        <form action="">
          <Grid container spacing={1}>
            <Typography color="textPrimary" variant="h4">
              User
            </Typography>
            <Grid xs={12}>
              <Typography color="textPrimary" variant="h6">
                Name
              </Typography>
              <TextField variant="outlined" size="small" fullWidth />
            </Grid>
            <Grid xs={12}>
              <Typography color="textPrimary" variant="h6">
                Username
              </Typography>
              <TextField variant="outlined" size="small" fullWidth />
            </Grid>

            <Grid>
            <Typography color="textPrimary" variant="h6">
                Profile image
              </Typography>
              <Avatar
  alt="Remy Sharp"
  src="/static/images/avatar/1.jpg"
  sx={{ width: 56, height: 56 }}
/>


            </Grid>

         
            {/* <Grid xs={12} >
                    <Typography color='textPrimary' variant='h6' >Name</Typography>
                    <TextField variant='outlined' fullWidth />
                </Grid> */}
          </Grid>
        </form>

        <Button variant="contained"> Save Profile</Button>
      </div>
    </div>
  );
}
