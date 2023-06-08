import React from 'react';
import './private.css';
import Sidebar from './Sidebar';
import { GiLightBulb } from 'react-icons/gi';


const Private = () => {
    const count=11;
    const divElements = Array.from({ length: count }, (_, index) => (
        <div className="box" key={index}>Element {index + 1}
            <div className="tag"><GiLightBulb size={14} /> Private</div>
        </div>
      ));
  return (
    <div className="private-page">
        <div className="private-sidebar-section"><Sidebar /></div>
        <div className="private-divs-section">
            <div className="private-welcome-msg">Welcome back, Aishwarya</div>
            <div className="pending-task-count">You have got {count} tasks pending for the next few days!</div>
            <div className="scrollable-container">{divElements}</div>

        </div>
    </div>
  )
}

export default Private