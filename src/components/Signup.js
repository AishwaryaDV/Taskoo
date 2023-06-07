import React from 'react'
import './signup.css'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import lottie from 'lottie-web'
import Footer from './Footer'
import {FaTasks} from 'react-icons/fa'

const Signup = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [isSignup, setIsSignup] = useState(true);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const container= useRef(null);
    const navigate= useNavigate();

    const validateName = (name) => {
        const nameRegex = /^[a-zA-Z\s]+$/;
        return nameRegex.test(name);
      };
    
      const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
    
      const validatePassword = (password) => {
        return password.length >= 8;
      };
      
      const handleNameChange = (event) => {
        setName(event.target.value);
        setNameError(validateName(event.target.value) ? '' : 'Invalid name');
      };
    
      const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setEmailError(validateEmail(event.target.value) ? '' : 'Invalid email');
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setPasswordError(validatePassword(event.target.value) ? '' : 'Invalid password');
      };
      
      const handleSubmit = (event) => {
        event.preventDefault();
        if (isSignup) {
          if (validateName(name) && validateEmail(email) && validatePassword(password)) {
            // Save user data to local storage
            localStorage.setItem('user', JSON.stringify({ name, email, password, isLoggedIn: true }));
            // Submit signup form
            console.log('Sign-up form submitted');
            window.location.href='./overview';
             // Reset the form
            setName('');
            setEmail('');
            setPassword('');
            setNameError('');
            setEmailError('');
            setPasswordError('');
          } else {
            console.log('Sign-up form validation failed');
          }
        } else {
          if (validateEmail(email) && validatePassword(password)) {
            //Submit login form
            console.log('Login form submitted');
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser && storedUser.email === email && storedUser.password === password) {
            console.log('Login successful');
            storedUser.isLoggedIn = true;
            window.location.href='./overview';

            } else {
            console.log('Login failed!');
            }
        }
      }
    }

    const handleCheckboxChange=()=>{
        setIsChecked(true);
    }
    const toggleForm=()=>{
        setIsSignup(!isSignup);
        setName('');
        setEmail('');
        setPassword('');
        setNameError('');
        setEmailError('');
        setPasswordError(''); //They are all set to blank to reset the form on toggling
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
    <>
    <div className="signup-login-page">
        {isSignup ? (
            <div className="signup-content">
            <header>
                <div className="signup-logo" onClick={()=>navigate("/")}><FaTasks size={17} className="taskoo-icon"/></div>
            </header>
            <div className="signup-header">Create your account & sign up</div>
            <br/>
            <form onSubmit={handleSubmit}>
                <label className="name-header">Name
                <br></br>
                    <input className="name-field" type="text" placeholder="Enter your name here"  value={name} onChange={handleNameChange}/>
                    {nameError && <span className="error">{nameError}</span>}
                </label>
                <br></br>
                <label className="email-header">Email
                <br></br>
                    <input className="email-field" type="text" placeholder="Enter your email here" value={email} onChange={handleEmailChange}/>
                    {emailError && <span className="error">{emailError}</span>}
                </label>
                <br></br>
                <label className="password-header">Password
                <br></br>
                    <input className="password-field" type="password" placeholder="Enter your password here" value={password} onChange={handlePasswordChange}/>
                    {passwordError && <span className="error">{passwordError}</span>}
                </label>
                <br></br>
                <div className="checkbox-container">
                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} id="myCheckbox"/>
                    <label htmlFor="myCheckbox">I agree to all terms & policy</label>
                </div>
                <button type="submit" className="signup-btn">Sign up</button>
                {/* <button onClick={()=>navigate("/overview")}>Testing</button> */}
            </form>
            <a href="#" className="login-link" onClick={toggleForm}>Already have an account? Login</a>
        </div>
        ) : (
        <div className="login-content">
        <header id="header">
            <div className="signup-logo" onClick={()=>navigate("/")}><FaTasks size={17} className="taskoo-icon"/></div>
        </header>
        <div className="login-header">Login to existing account</div>
        <br/>
        <form onSubmit={handleSubmit}>
            <label className="login-email-header">Email
            <br></br>
                <input className="login-email-field" type="text" placeholder="Enter your email here" value={email} onChange={handleEmailChange}/>
                {emailError && <span className="error">{emailError}</span>}
            </label>
            <br></br>
            <label className="login-password-header">Password
            <br></br>
                <input className="login-password-field" type="password" placeholder="Enter your password here" value={password} onChange={handlePasswordChange}/>
                {passwordError && <span className="error">{passwordError}</span>}
            </label>
            <br></br>
            <div className="checkbox-container">
                <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} id="myCheckbox"/>
                <label htmlFor="myCheckbox">I agree to all terms & policy</label>
            </div>
            <button type="submit" className="login-btn">Log in</button>
            {/* <button onClick={()=>navigate("/overview")}>Testing</button> */}
        </form>
        <a href="#" className="signup-link" onClick={toggleForm}>Don't have an account? Sign up</a>
    </div>)}

    <div className="signup-image">
        <div className="signup-container" ref={container}></div>
    </div>
    </div>
    <Footer/>
</>

  );
};

export default Signup