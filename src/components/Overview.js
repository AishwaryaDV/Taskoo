import React from 'react'
import './overview.css'
import Footer from './Footer'
import Sidebar from './Sidebar'
import {useEffect, useRef} from 'react'
import lottie from 'lottie-web'

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
       <div className="overview-sidebar-section"> <Sidebar /></div>
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