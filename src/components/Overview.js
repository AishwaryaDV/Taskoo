import React from 'react'
import './overview.css'
import {BsHouseGear} from 'react-icons/bs'
import {ImFilesEmpty} from 'react-icons/im'
import {BsChatLeftHeart} from 'react-icons/bs'
import {TfiStatsUp} from 'react-icons/tfi'
import {SlCalender} from 'react-icons/sl'
import {FiSettings} from 'react-icons/fi'
import {BiExit} from 'react-icons/bi'
import {useEffect, useRef} from 'react'
import lottie from 'lottie-web'
import Footer from './Footer'

const Overview = () => {
    const container1= useRef(null);
    const container2= useRef(null);
    const container3= useRef(null);
    const container4= useRef(null);

    useEffect(()=>{
      const anim1= lottie.loadAnimation({
        container: container1.current,
        renderer:'svg',
        loop:true,
        autoplay:true,
        animationData: require('./man-laptop.json')
      });

      const anim2= lottie.loadAnimation({
        container: container2.current,
        renderer:'svg',
        loop:true,
        autoplay:true,
        animationData: require('./goals-man.json')
      });

      const anim3= lottie.loadAnimation({
        container: container3.current,
        renderer:'svg',
        loop:true,
        autoplay:true,
        animationData: require('./tredmill-woman.json')
      });

      const anim4= lottie.loadAnimation({
        container: container4.current,
        renderer:'svg',
        loop:true,
        autoplay:true,
        animationData: require('./brain.json')
      });
      return ()=>{
        anim1.destroy();
        anim2.destroy();
        anim3.destroy();
        anim4.destroy();
      };
    },[])

  return (
    <div className="overview-section">
        <div className="sidebar-section">
        <div className="landing-logo">Taskoo</div>
        <div className="main-sidebar-items">
            <span><BsHouseGear className="overview-icon" size={20} color="grey" />Overview</span>
            <span><ImFilesEmpty className="overview-icon" size={20} color="grey" />Projects</span>
            <span><BsChatLeftHeart className="overview-icon" size={20} color="grey" />Notes</span>
            <span><TfiStatsUp className="overview-icon" size={20} color="grey"/>Stats</span>
            <span><SlCalender className="overview-icon" size={20} color="grey"/>Calender</span>
        </div>
        <div className="extra-sidebar-items">
            <span><FiSettings className="overview-icon" size={20} color="grey"/>Settings</span>
            <span><BiExit className="overview-icon" size={20} color="grey"/>Log out</span>
        </div>
        </div>
        <div className="categories-section">
           <div className="categories-upper-section">
                <div className="work-section">
                    <div className="work-section-header">Work</div>
                    <div className="container1" ref={container1}></div>
                    {/* <div className="work-section-date">Yesterday</div>
                    <span className="work-section-tasks">3/4</span>
                    <span className="work-section-loader">O</span> */}
                </div>
                <div className="health-section">
                    <div className="health-section-header">Health</div>
                    <div className="container3" ref={container3}></div>
                    {/* <div className="health-section-date">2 weeks ago</div>
                    <span className="health-section-tasks">6/12</span>
                    <span className="health-section-loader">O</span> */}
                </div>
           </div>

            <div className="categories-lower-section">
                <div className="private-section">
                    <div className="private-section-header">Private</div>
                    <div className="container2" ref={container2}></div>
                    {/* <div className="private-section-date">2 days ago</div>
                    <span className="private-section-tasks">1/3</span>
                    <span className="private-section-loader">O</span> */}
                </div>
                <div className="goals-section">
                    <div className="goals-section-header">Goals</div>
                    <div className="container4" ref={container4}></div>
                    {/* <div className="goals-section-date">2 weeks ago</div>
                    <span className="goals-section-tasks">3/4</span>
                    <span className="goals-section-loader">O</span> */}
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Overview