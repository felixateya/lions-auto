import React from "react";

function Login() {
  return (
    <div className="Login">
      <div className="center">
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div className="info">
          <div className="left">
            <h2>Lions auto</h2>
            <div className="form">
              <h1>Welcome back</h1>
              <p>Please enter your details</p>

              <label>Email</label>

              <input className="input" type="email" placeholder="Enter your email" />
              <label>Password</label>
              <input className="input" type="password" placeholder="Enter your password" />
              <div className="add">
              <div className="rem">
              <input type="checkbox"/>
              <p>Remember for 30 days</p>
              </div>
              <a href="/">Forgot password</a>
              </div>
              <button>Sign in</button>
              <div className="sign">
                <p>Don't have an account? <a href="/">Sign up</a></p>
              </div>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
