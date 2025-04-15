import React from 'react';
import Sidebar from '../components/Sidebar'; // Import the Sidebar component

function Planificador() {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <Sidebar /> {/* Sidebar component */}
            <div style={{ flex: 1, padding: '20px' }}>
                <h1>Página Planificador</h1>
                <p>Página del planificador.</p>
            </div>
        </div>
    );
}

export default Planificador;