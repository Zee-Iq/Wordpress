import React from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-form">
        <p className="login-p">Log in to your account</p>
        <form>
          <MDBInput
            className="mb-4"
            type="email"
            id="form1Example1"
            label="Email address"
          />
          <MDBInput
            className="mb-4"
            type="password"
            id="form1Example2"
            label="Password"
          />

      
          <p className="continue">
            By continuing, you agree to our <span> Terms of Service.</span>
          </p>

          <MDBBtn type="submit" color="danger" block>
            Continue
          </MDBBtn>
          <p className="or">OR</p>

          <MDBBtn type="submit" outline color="dark" block>
            <MDBIcon className="icon" fab icon="google" />
            Continue with Google
          </MDBBtn>
          <MDBBtn type="submit" outline color="dark" block>
            <MDBIcon className="icon" fab icon="apple" />
            Continue with Apple
          </MDBBtn>
          <p className="continue">
            If you continue with Google or Apple and don't already have a
            WordPress.com account, you are creating an account and you agree to
            our <span> Terms of Service.</span>
          </p>
        </form>

        <p className="option-p">Create a new account</p>

        <p className="option-p">Lost your password?</p>

        <p className="option-p">
          <i  className=" icon fas fa-arrow-left"></i>Back to Wordpress.com
        </p>
      </div>
    </div>
  );
}
