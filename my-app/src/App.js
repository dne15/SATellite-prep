import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import MissionControlPage from "./pages/MissionControlPage";
import TheRomansPage from "./pages/TheRomansPage";
import ChatBotPage from "./pages/ChatBotPage";
import GalaxyExplorerPage from "./pages/GalaxyExplorerPage";
import PlanetExplorerPage from "./pages/PlanetExplorerPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/missioncontrol" element={<MissionControlPage />} />
        <Route path="/theromanspage" element={<TheRomansPage />} />
        <Route path="/chatbot" element={<ChatBotPage />} />
        <Route path="/galaxyexplorer" element={<GalaxyExplorerPage />} />
        <Route path="/planetexplorer" element={<PlanetExplorerPage />} />
      </Routes>
    </Router>
  );
}




function HomePage() {
  return (
    <div className="appcontainer">
      <div className="Skyandtext">
        <Link to="/missioncontrol">
          <img
            className="background"
            src="/background.png"
            alt="Sky background"
          />
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
  );
}

export default App;
