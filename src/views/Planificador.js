import React from 'react';
import Sidebar from '../components/Sidebar';
import FilterComponent from '../components/FilterComponent';
import CalendarComponent from '../components/CalendarComponent';
import AlertsComponent from '../components/AlertsComponent';
import FinalButtonsComponent from '../components/FinalButtonsComponent';

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

            {/* <div style={{ flex: 1, padding: '20px' }}>
                <h1>Página Planificador</h1>
                <p>Página del planificador.</p>
            </div> */}
        </div>
    );
}

export default Planificador;