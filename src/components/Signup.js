import React from 'react'
import './signup.css'
import { useState, useEffect, useRef } from 'react'
import lottie from 'lottie-web'

const Signup = () => {
    const [isChecked, setIsChecked]= useState(false);
    const [isSignup, setIsSignup]= useState(true);
    const container= useRef(null);

    const handleCheckboxChange=()=>{
        setIsChecked(true);
    }
    const toggleForm=()=>{
        setIsSignup(!isSignup);
    }

    useEffect(()=>{
        const anim= lottie.loadAnimation({
          container: container.current,
          renderer:'svg',
          loop:true,
          autoplay:true,
          animationData: require('./man.json')
        });
        return ()=>{
          anim.destroy();
        };
  
      },[])

  return (
    <div className="signup-login-page">
        {isSignup ? (
            <div className="signup-content">
            <div className="signup-logo">Taskoo</div>
            <div className="signup-header">Create your account & sign up</div>
            <br/>
            <form>
                <label className="name-header">Name
                <br></br>
                    <input className="name-field" type="text" placeholder="Enter your name here" />
                </label>
                <br></br>
                <label className="email-header">Email
                <br></br>
                    <input className="email-field" type="text" placeholder="Enter your email here" />
                </label>
                <br></br>
                <label className="password-header">Password
                <br></br>
                    <input className="password-field" type="password" placeholder="Enter your password here" />
                </label>
                <br></br>
                <div className="checkbox-container">
                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} id="myCheckbox"/>
                    <label htmlFor="myCheckbox">I agree to all terms & policy</label>
                </div>
                <button className="signup-btn">Sign up</button>
            </form>
            <a href="#" className="login-link" onClick={toggleForm}>Already have an account? Login</a>
        </div>
        ) : (
        <div className="login-content">
        <div className="signup-logo">Taskoo</div>
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
            <button className="login-btn">Log up</button>
        </form>
        <a href="#" className="signup-link" onClick={toggleForm}>Don't have an account? Sign up</a>
    </div>)}

    <div className="signup-image">
        <div className="signup-container" ref={container}></div>
    </div>
    </div>
  )
}

export default Signup