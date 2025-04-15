import React from 'react';
import '../styles/Planificador.css'; // Import the external CSS file

function Sidebar() {
    return (
        <div className="sidebar"> {/* Apply the CSS class */}
            <div className="sidebar-content"> {/* New wrapper for content */}
                <h4-dark>Generación de calendario</h4-dark>

                {/* CONTENEDOR DE CONSTRAINTS */}
                <div className="contenedor-constraints">
                    <div className="constraint">
                        <label className="constraint-label">Constraint</label>
                        <input className="constraint-input"></input>
                    </div>

                    <div className="constraint">
                        <label className="constraint-label">Constraint</label>
                        <input className="constraint-input"></input>
                    </div>

                    <div className="constraint">
                        <label className="constraint-label">Constraint</label>
                        <input className="constraint-input"></input>
                    </div>
                </div>
            </div>

            {/* Contenedor de DESCARTAR / APLICAR */}
            <div className="contenedor-descartar-generar">
                <button className="discard-button bold">Descartar</button>
                <button className="generate-button bold">Generar</button>
            </div>

        </div>
    );
}

export default Sidebar;
