import React from 'react'
import './landing.css'
import PlayButton from '../assets/play-button.png'
import {useEffect, useRef} from 'react'
import lottie from 'lottie-web'
import {useNavigate} from 'react-router-dom'
import Footer from './Footer'

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

    const handleScroll = () => {
        const header = document.getElementById('header');
        const sticky = header.offsetTop;
    
        if (window.pageYOffset > sticky) {
          header.classList.add('sticky');
        } else {
          header.classList.remove('sticky');
        }
      };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
       
  return (
    <div>
        <header id="header">
        <div className="landing-logo">Taskoo</div>
        </header>
        <div className="taskoo-header">Manage your daily tasks & everything with<span style={{display:'inline', marginLeft:'9px'}} className="taskoo-word">taskoo</span></div>
        <div className="container" ref={container}></div>
        <div className="taskboo-tagline">When you're overwhelmed by the amount of work you have on your plate, stop and rethink.</div>
        <img className="play-button" src={PlayButton} alt="play button"/>
        <div className="play-button-desc">
            <span>How</span>
            <div className="horizontal-line"></div>
            <span className="span-element">taskoo</span>
            <span>works</span>
        </div>
        <button className="landing-page-btn" onClick={()=>navigate("/signup")}>Let's start</button>
        <Footer />
    </div>
  )
}

export default Landing