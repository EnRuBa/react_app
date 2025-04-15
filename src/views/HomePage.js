// src/views/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link para poder navegar
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="home-page">

        <div className="home-page-component">
            <h2>PLANIFICADOR</h2>
            <div className="homePageButtons">
                <Link to="/calendario">
                    <button className="homePageButton">Calendario</button>
                </Link>
                <Link to="/planificador">
                    <button className="homePageButton">Planificador</button>
                </Link>
            </div>
        </div>
        
    </div>
  );
}

export default HomePage;
