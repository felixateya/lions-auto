import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"
function Login() {
  return (
    <div className="Login">
          <div className="info">
            
            <img src={logo} alt="" />
            <div className="form">
              <h1>Welcome back</h1>
              <p>Please enter your details</p>

              <label>Email</label>

              <input className="input" type="email" placeholder="Enter your email" />
              <label>Password</label>
              <input className="input" type="password" placeholder="Enter your password" />
              <div className="add">
              {/* <div className="rem">
              <input type="checkbox"/>
              <p>Remember for 30 days</p>
              </div> */}
              <a href="/">Forgot password?</a>
              </div>
              <button>Sign in</button>
              <div className="sign">
                <p>Don't have an account? <Link to="/Register">Sign up</Link></p>
              </div>
            </div>
          </div>
    </div>
  );
}

export default Login;
