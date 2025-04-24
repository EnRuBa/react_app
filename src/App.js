// IMPORTS
import logo from './logo.svg';
import './App.css';
import './styles/general.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Planificador from './views/Planificador';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Planificador />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
