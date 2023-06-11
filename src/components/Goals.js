import React from 'react';
import './goals.css';
import Sidebar from './Sidebar';
import { GiTrophy } from 'react-icons/gi';


const Goals = () => {
    const count=11;
    const divElements = Array.from({ length: count }, (_, index) => (
        <div className="box" key={index}>Element {index + 1}
            <div className="tag"><GiTrophy size={14} /> Goals</div>
        </div>
      ));
  return (
    <div className="goals-page">
        <div className="goals-sidebar-section"><Sidebar /></div>
        <div className="goals-divs-section">
            <div className="goals-welcome-msg">Welcome back, Aishwarya</div>
            <div className="pending-task-count">You have got {count} tasks pending for the next few days!</div>
            <div className="scrollable-container">{divElements}</div>

        </div>
    </div>
  )
}

export default Goals