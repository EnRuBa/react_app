import React from 'react';
import '../styles/Calendario.css'; // Import the external CSS file
import WeeklyCalendar from './calendars/WeeklyCalendar';
import MonthlyCalendar from './calendars/MonthlyCalendar';
import YearCalendar from './calendars/YearCalendar';

function Calendar({ format }) {
    const renderFormato = () => {
        switch (format) {
            case "S":
                return <WeeklyCalendar format="F" />;
            case "SW":
                return <WeeklyCalendar format="W" />;
            case "M":
                return <MonthlyCalendar format="F" />;
            case "MW":
                return <MonthlyCalendar format="W" />;
            case "A":
                return <YearCalendar />;
            default:
                return <MonthlyCalendar format="F" />;
        }
    };

    return (
        <div className="calendar-container">
            {renderFormato()}
        </div>
    );
}

export default Calendar;
