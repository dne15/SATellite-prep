import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import MissionControlPage from './components/MissionControlPage';

function App() {
  return (
    <Router>
      <div className="container">
        {/* Fondo y texto */}
        <div className="Skyandtext">
          <Link to="/missioncontrol">
            <img className="background" src="/background.png" alt="Sky background" />
          </Link>
        </div>

        {/* Cohete y bolas de humo */}
        <div className="rocketandballs">
          <img className="rocket" src="/rocket.png" alt="Rocket" />
          <div className="balls">
            {/* Bolas de humo */}
            <div className="ball">
              <img src="/ball1.png" alt="Smoke Ball 1" />
            </div>
            <div className="ball">
              <img src="/ball2.png" alt="Smoke Ball 2" />
            </div>
            <div className="ball">
              <img src="/ball3.png" alt="Smoke Ball 3" />
            </div>
          </div>
        </div>
      </div>

      {/* Rutas */}
      <Routes>
        <Route path="/missioncontrol" element={<MissionControlPage />} />
      </Routes>
    </Router>
  );
}

export default App;
