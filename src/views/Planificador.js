import React from 'react';
import Sidebar from '../components/Sidebar';
import FilterComponent from '../components/FilterComponent';
import CalendarComponent from '../components/CalendarComponent';
import AlertsComponent from '../components/AlertsComponent';
import FinalButtonsComponent from '../components/FinalButtonsComponent';

import { Calendar } from 'react-big-calendar';

function Planificador() {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <Sidebar />

            <div className="mainContainer">
                <FilterComponent />
                <CalendarComponent />
                <div className="bottomContainer">
                    <AlertsComponent />
                    <FinalButtonsComponent />
                </div>

            </div>
        </div>
    );
}

export default Planificador;