import React from 'react'
import './landing.css'
import PlayButton from '../assets/play-button.png'
import {useEffect, useRef, useState} from 'react'
import lottie from 'lottie-web'
import {useNavigate} from 'react-router-dom'
import Footer from './Footer'
import {FaGithub} from 'react-icons/fa'

const Landing = (props) => {
    const navigate= useNavigate();
    const container= useRef(null);

    useEffect(()=>{
      const anim= lottie.loadAnimation({
        container: container.current,
        renderer:'svg',
        loop:true,
        autoplay:true,
        animationData: require('./woman.json')
      });
      return ()=>{
        anim.destroy();
      };

    },[])

const navigateToURL = (url) => {
      window.open(url, '_blank');
};
    
  return (
    <div className="landing-section">
        <header>
          <div className="landing-logo" onClick={()=>navigate("/")}>Taskoo
            <div onClick={() => navigateToURL('https://github.com/AishwaryaDV/Taskoo')}>
              <FaGithub size={30} className="github-icon" />
            </div>
          </div>
        </header>
        <div className="taskoo-header">Manage your daily tasks & everything with<span style={{display:'inline', marginLeft:'9px'}} className="taskoo-word">taskoo</span></div>
        <div className="landing-container" ref={container}></div>
        <div className="taskboo-tagline">When you're overwhelmed by the amount of work you have on your plate , stop and rethink.</div>
        <button className="landing-page-btn" onClick={()=>navigate("/signup")}>Let's start</button>
        <Footer />
    </div>
  )
}

export default Landing