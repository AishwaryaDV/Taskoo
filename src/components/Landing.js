import React from 'react'
import './landing.css'
import PlayButton from '../assets/play-button.png'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const Landing = (props) => {

    const navigate= useNavigate();

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      const handleScroll = () => {
        const header = document.getElementById('header');
        const sticky = header.offsetTop;
    
        if (window.pageYOffset > sticky) {
          header.classList.add('sticky');
        } else {
          header.classList.remove('sticky');
        }
      };
       
  return (
    <div>
        <header id="header">
        <div className="landing-logo">Taskoo</div>
        </header>
        <div className="taskoo-header">Manage your daily tasks & everything <br/> with <span style={{display:'inline'}} className="taskoo-word">taskoo</span></div>
        <div className="taskboo-tagline">When you're overwhelmed by the amount of work you have <br></br>on your plate, stop and rethink.</div>
        <img className="play-button" src={PlayButton} alt="play button"/>
        <div className="play-button-desc">
            <span>How</span>
            <div className="horizontal-line"></div>
            <span className="span-element">taskoo</span>
            <span>works</span>
        </div>
        <button className="landing-page-btn" onClick={()=>navigate("/signup")}>Let's start</button>
    </div>
  )
}

export default Landing