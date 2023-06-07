import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {FaTasks} from 'react-icons/fa'
import './login.css'

const Login = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [isSignup, setIsSignup] = useState(true);
    const navigate= useNavigate();

    const handleCheckboxChange=()=>{
        setIsChecked(true);
    }
    const toggleForm=()=>{
        setIsSignup(!isSignup);
    }
  return (
    <div className="login-content">
        <header id="header">
            <div className="signup-logo" onClick={()=>navigate("/")}><FaTasks size={17} className="taskoo-icon"/></div>
        </header>
        <div className="login-header">Login to existing account</div>
        <br/>
        <form>
            <label className="login-email-header">Email
            <br></br>
                <input className="login-email-field" type="text" placeholder="Enter your email here" />
            </label>
            <br></br>
            <label className="login-password-header">Password
            <br></br>
                <input className="login-password-field" type="password" placeholder="Enter your password here" />
            </label>
            <br></br>
            <div className="checkbox-container">
                <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} id="myCheckbox"/>
                <label htmlFor="myCheckbox">I agree to all terms & policy</label>
            </div>
            <button className="login-btn">Log in</button>
            <button onClick={()=>navigate("/overview")}>Testing</button>
        </form>
        <a href="#" className="signup-link" onClick={toggleForm}>Don't have an account? Sign up</a>
    </div>
  )
}

export default Login