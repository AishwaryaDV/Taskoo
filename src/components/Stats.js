import React from 'react'
import PieChart from './PieChart'
import Sidebar from './Sidebar'
import './stats.css'

const Stats = ({cards}) => {
    const workData = [
        { name: 'To do', value: 4 },
        { name: 'In progress', value: 7 },
        { name: 'Completed', value: 10 }
      ];
    const healthData = [
        { name: 'To do', value: 6 },
        { name: 'In progress', value: 4 },
        { name: 'Completed', value: 5 }
      ];
    const privateData = [
        { name: 'To do', value: 2 },
        { name: 'In progress', value: 5 },
        { name: 'Completed', value: 8 }
      ];
    const goalsData = [
        { name: 'To do', value: 6 },
        { name: 'In progress', value: 2 },
        { name: 'Completed', value: 5 }
      ];

      if(!cards) {
        return <div>No data available</div>;
      }
    
  return (
    <div className="stats-section">
        <div className="stats-sidebar-section">
            <Sidebar />
        </div>
        <div className="piecharts-section">
            <div className="top-stats">
                {/* <PieChart data={workData} label="Work"/>
                <PieChart data={healthData} label="Health" /> */}
                 Hello 1
                 {cards.map((card) => (
                 <div key={card.id}>{card.text}</div>
                 ))}

            </div>
            <div className="bottom-stats">
                {/* <PieChart data={privateData} label="Private"/>
                <PieChart data={goalsData} label="Goals" /> */}
                Hello 2
             </div>
        </div>
    </div>
  )
}

export default Stats