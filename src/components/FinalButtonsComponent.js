import React from 'react';
import '../styles/Planificador.css'; // Import the external CSS file

function FinalButtonsComponent() {
    return (
        <div className="finalButtonsComponent">

            <div className="finalBUttonsContainer">
                <button className="apply-calendar-button bold">Aceptar cambios</button>
                <button className="discard-calendar-button bold">Descartar cambios</button>
            </div>

        </div>
    );
}

export default FinalButtonsComponent;
