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
import {useState, useRef, useEffect} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {FaTasks} from 'react-icons/fa'


const Sidebar = () => {
   
    const navigate= useNavigate();
    const [date, setDate] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false);
  
    const onChange = (selectedDate) => {
      setDate(selectedDate);
    };
  
    const toggleCalendar = () => {
      setIsOpen(!isOpen);
    };

    //new
    // const [isCalendarVisible, setCalendarVisible] = useState(false);
    // const calendarRef = useRef(null);

    // useEffect(() => {
    // const handleOutsideClick = (event) => {
    //   if (calendarRef.current && !calendarRef.current.contains(event.target)) {
    //     setCalendarVisible(false);
    //   }
    // };

    // document.addEventListener('mousedown', handleOutsideClick);

    // return () => {
    //   document.removeEventListener('mousedown', handleOutsideClick);
    // };
    // }, []);

    // const toggleCalendar = () => {
    // setCalendarVisible(!isCalendarVisible);
    // };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    };
    
  return (
    <div>
        <div className="sidebar-section">
        <header id="header">
        <div className="landing-logo" onClick={()=>navigate("/")}><FaTasks size={17} />
          <span className="username">Welcome, Username</span>
        </div>
        </header>
        <div className="main-sidebar-items">
            <span className="sidebar-icons" onClick={()=>navigate("/overview")}><BsHouseGear className="overview-icon" size={20} />Overview</span>
            <span className="sidebar-icons" onClick={()=>navigate("/projects")}><ImFilesEmpty className="overview-icon" size={20} />Projects</span>
            <span className="sidebar-icons" onClick={()=>navigate("/notes")}><BsChatLeftHeart className="overview-icon" size={20} />Notes</span>
            <span className="sidebar-icons" onClick={()=>navigate("/stats")}><TfiStatsUp className="overview-icon" size={20} />Stats</span>
            
            <div className="calendar-container">
                <span className="sidebar-icons" onClick={toggleCalendar}><SlCalender className="overview-icon" size={20} />Calender</span>
                {isOpen && (
                  <div className="calendar-popup">
                    <Calendar showNavigation={true} onChange={onChange} value={date} />
                  </div>
                )}

                {/* {isCalendarVisible && (
                  <div ref={calendarRef}>
                    <Calendar />
                  </div>
                )} */}
            </div>
            <div className="dropdown-container">
              <span className="sidebar-icons" onClick={toggleDropdown} style={{marginLeft:'-23px'}}><FiSettings className="overview-icon" size={20} />Settings</span>
              {isDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li>Change name</li>
                    <li>Change password</li>
                    <li>Delete account</li>
                  </ul>
              )}
            </div>
            
          </div>
        <div className="extra-sidebar-items">
            <span className="sidebar-icons"><BiExit className="overview-icon" size={20} />Log out</span>
        </div>
        </div>
    </div>
  )
}

export default Sidebar