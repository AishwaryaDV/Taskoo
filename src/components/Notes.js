import React from 'react'
import './notes.css'
import Sidebar from './Sidebar'
import {useEffect, useRef} from 'react'
import lottie from 'lottie-web'
import Idea from '../assets/idea.png'

const Notes = () => {
  const container= useRef(null);

  useEffect(()=>{
    const anim= lottie.loadAnimation({
      container: container.current,
      renderer:'svg',
      loop:true,
      autoplay:true,
      animationData: require('./woman-notes.json')
    });

    return ()=>{
      anim.destroy();
    };
  },[])
  return (
    <>
      <div className="notes-section">
        <div className="notes-sidebar-section"><Sidebar /></div>
        <div className="notes-list-section">1</div>
        <div className="new-note-section">
          <div className="container" ref={container}></div>
          <div className="notes-header">Write down your ideas <img className="idea-icon" src={Idea} alt="idea icon" /></div>
          <div className="notes-hashtags">#ideas #thoughts #to-do's</div>
          <div className="author-note-section">"Taskoo can improve mental health by providing organization, stress reduction, memory enhancement, goal setting, self-reflection, and increased productivity. It offers structure, a therapeutic outlet, and aids in memory retention, personal growth, and task management, ultimately promoting clarity, well-being, and a positive mindset." says Aishwarya DV</div>
        </div>
      </div>
      
    </>
  )
}

export default Notes