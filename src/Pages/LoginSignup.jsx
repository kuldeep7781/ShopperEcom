import React from "react";
import "./CSS/LoginSignup.css"

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Signup</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="E-Mail Address" />
          <input type="password" placeholder="PassWord" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an Account? <span>Login</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the Terms of Use & Privacy Policies</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
