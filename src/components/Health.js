import React from 'react';
import './health.css';
import Sidebar from './Sidebar';
import { IoMdFitness } from 'react-icons/io';


const Health = () => {
    const count=11;
    const divElements = Array.from({ length: count }, (_, index) => (
        <div className="box" key={index}>Element {index + 1}
            <div className="tag"><IoMdFitness size={14} /> Health</div>
        </div>
      ));
  return (
    <div className="health-page">
        <div className="health-sidebar-section"><Sidebar /></div>
        <div className="health-divs-section">
            <div className="health-welcome-msg">Welcome back, Aishwarya</div>
            <div className="pending-task-count">You have got {count} tasks pending for the next few days!</div>
            <div className="scrollable-container">{divElements}</div>

        </div>
    </div>
  )
}

export default Health