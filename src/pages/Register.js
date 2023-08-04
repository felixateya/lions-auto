import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
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

              <label>Name</label>

              <input className="input" type="text" placeholder="Enter your name" />
              <label>Email</label>

              <input className="input" type="email" placeholder="Enter your email" />
              <label>Password</label>
              <input className="input" type="password" placeholder="Enter your password" />
              
              <button>Sign up</button>
              <div className="sign">
                <p>Already have an account? <Link  to="/">Sign in</Link></p>
              </div>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  )
}

export default Register