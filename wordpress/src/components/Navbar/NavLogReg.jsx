import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

export default function NavLogReg() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link
            to="/"
            style={{
              alignSelf: "center",
              textDecoration: "none",
              color: "white",
              marginRight: "30px",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              WordPress.clone
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
