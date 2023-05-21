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
            <span onClick={()=>navigate("/overview")}><BsHouseGear className="overview-icon" size={20} color="grey" />Overview</span>
            <span><ImFilesEmpty className="overview-icon" size={20} color="grey" />Projects</span>
            <span onClick={()=>navigate("/notes")}><BsChatLeftHeart className="overview-icon" size={20} color="grey" />Notes</span>
            <span><TfiStatsUp className="overview-icon" size={20} color="grey"/>Stats</span>
            <span><SlCalender className="overview-icon" size={20} color="grey"/>Calender</span>
        </div>
        <div className="extra-sidebar-items">
            <span><FiSettings className="overview-icon" size={20} color="grey"/>Settings</span>
            <span><BiExit className="overview-icon" size={20} color="grey"/>Log out</span>
        </div>
        </div>
    </div>
  )
}

export default Sidebar