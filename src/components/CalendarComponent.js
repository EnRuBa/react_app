import React, { useState } from 'react';
import '../styles/Planificador.css';
import { Calendar, dateFnsLocalizer, Views } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay, addDays } from 'date-fns';
import events from "../data/events";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Unified constants from constants.js
const locales = {
    'es-ES': require('date-fns/locale/es'),
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek, // Explicitly set start of the week to Monday
    getDay,
    locales,
});

function CalendarComponent() {
    const [calendarFormat, setCalendarFormat] = useState("M");

    const formatToViewMap = {
        S: Views.WEEK,
        SW: Views.WORK_WEEK,
        M: Views.MONTH,
        A: "year",
    };

    return (
        <div className="calendarComponent">
            <div className="contenedorTituloSelector">
                <div className="contenedorTitulo">
                    <h4>Calendario</h4>
                </div>
                <div className="contenedorSeleccionable">
                    <select 
                        className="selectorFormatoCalendario" 
                        value={calendarFormat} 
                        onChange={(event) => setCalendarFormat(event.target.value)}
                    >
                        <option value="S">Semanal</option>
                        <option value="SW">Semanal (trabajo)</option>
                        <option value="M">Mensual</option>
                        <option value="A">Anual</option>
                    </select>
                </div>
            </div>
            
            <div className="calendarContainer">
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                    toolbar={false}
                    view={formatToViewMap[calendarFormat]}
                    onView={() => {}}
                    views={{
                        week: {
                            startOfWeek: 1, // Explicitly set the week to start on Monday
                        },
                        month: true,
                    }}
                />
            </div>
        </div>
    );
}

export default CalendarComponent;