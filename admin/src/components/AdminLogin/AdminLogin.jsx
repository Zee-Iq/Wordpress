import * as React from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import "./login.css";
import { Link } from "react-router-dom";


const style = {
  textAlign: "center",
  width: "100%",
  maxWidth: 360,
  mt: 5,
};

const theme = createTheme();

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div className="login-container">
      {/* <Typography component="h1" variant="h5">
              Log in to your account
            </Typography> */}
      <ThemeProvider theme={theme}>
        <Container className="form" component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Log in to your account
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <p>
                By continuing, you agree to our <span> Terms of Service.</span>
              </p>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ backgroundColor: "#ef5350" }}
                sx={{ mt: 3, mb: 2 }}
              >
                Continue
              </Button>

              <p className="or">OR</p>

              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
              >
                <GoogleIcon className="icon" />
                Continue with Google
              </Button>

              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
              >
                <AppleIcon className="icon" />
                Continue with Apple
              </Button>
              <p>
                If you continue with Google or Apple and don't already have a
                WordPress.com account, you are creating an account and you agree
                to our <span> Terms of Service.</span>
              </p>
            </Box>

            <List
              className="list"
              sx={style}
              component="nav"
              aria-label="mailbox folders"
            >
              <Link className="link" to='/register'>
              <ListItemText primary="Create a new account" />
              </Link>
              <Divider />
              <Link className="link" to='/forgotpassword'>
              <ListItemText primary="Lost your password" />
              </Link>
              <Divider />
              <Link className="link" to="/">
              <ListItemText primary="Back to WordPress.com" />
              </Link>
              {/* <ListItem>
              <ArrowBackIcon/> */}
              {/* <ListItemText primary="Back to WordPress.com" /> */}
              {/* </ListItem> */}
            </List>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
