import React from 'react'
import './sidebar.css'
import {BsHouseGear} from 'react-icons/bs'
import {ImFilesEmpty} from 'react-icons/im'
import {BsChatLeftHeart} from 'react-icons/bs'
import {TfiStatsUp} from 'react-icons/tfi'
import {SlCalender} from 'react-icons/sl'
import {FiSettings} from 'react-icons/fi'
import {BiExit} from 'react-icons/bi'
import {useNavigate} from 'react-router-dom'

const Sidebar = () => {
   
    const navigate= useNavigate();

    
  return (
    <div>
        <div className="sidebar-section">
        <header id="header">
        <div className="landing-logo" onClick={()=>navigate("/")}>Taskoo</div>
        </header>
        <div className="main-sidebar-items">
            <span className="sidebar-icons" onClick={()=>navigate("/overview")}><BsHouseGear className="overview-icon" size={20} />Overview</span>
            <span className="sidebar-icons" onClick={()=>navigate("/projects")}><ImFilesEmpty className="overview-icon" size={20} />Projects</span>
            <span className="sidebar-icons" onClick={()=>navigate("/notes")}><BsChatLeftHeart className="overview-icon" size={20} />Notes</span>
            <span className="sidebar-icons" onClick={()=>navigate("/stats")}><TfiStatsUp className="overview-icon" size={20} />Stats</span>
            <span className="sidebar-icons" onClick={()=>navigate("/calender")}><SlCalender className="overview-icon" size={20} />Calender</span>
        </div>
        <div className="extra-sidebar-items">
            <span className="sidebar-icons"><FiSettings className="overview-icon" size={20} />Settings</span>
            <span className="sidebar-icons"><BiExit className="overview-icon" size={20} />Log out</span>
        </div>
        </div>
    </div>
  )
}

export default Sidebar