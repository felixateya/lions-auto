import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/logo.png"

function Register() {
  return (
    <div className="Login">
          <div className="info">
            {/* <h2>Lions auto</h2> */}
            <img src={logo} alt="" />
            <div className="form">
              <h1>Welcome back</h1>
              <p>Please enter your details</p>

              <label>Name</label>
              <input className="input" type="text" placeholder="Enter your name" />
              <label>Email</label>
              <input className="input" type="email" placeholder="Enter your email" />
              <label>Password</label>
              <input className="input" type="password" placeholder="Enter your password" />
              <button>Sign up</button>
              <div className="sign">
                <p><Link to="/">Sign in</Link></p>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Register