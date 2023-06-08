import React from 'react';
import './work.css';
import Sidebar from './Sidebar';
import { RiShoppingBagFill } from 'react-icons/ri';


const Work = () => {
    const count=20;
    const divElements = Array.from({ length: count }, (_, index) => (
        <div className="box" key={index}>Element {index + 1}
            <div className="tag"><RiShoppingBagFill size={13} /> Work</div>
        </div>
      ));
  return (
    <div className="work-page">
        <div className="work-sidebar-section"><Sidebar /></div>
        <div className="work-divs-section">
            <div className="work-welcome-msg">Welcome back, Aishwarya</div>
            <div className="pending-task-count">You have got {count} tasks pending for the next few days!</div>
            <div className="scrollable-container">{divElements}</div>

        </div>
    </div>
  )
}

export default Work