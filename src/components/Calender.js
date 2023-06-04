import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calender.css'

const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <div>
      <Calendar value={date} onChange={onChange}  />
    </div>
  );
};

export default CustomCalendar;
