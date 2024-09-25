import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import LaunchPage from './components/LaunchPage';
import MissionControlPage from './components/MissionControlPage';
import GalaxyExplorerPage from './components/GalaxyExplorerPage';
import PlanetExplorerPage from './components/PlanetExplorerPage';
import TheRomansPage from './components/TheRomansPage';
import ChatBotPage from './components/ChatBotPage';


function App() {
  return (
    <Router>
      <div className="container">
        {/* <div className="logo-row">
          <img className="logoimage" src="/header.png" alt="header" />
        </div> */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/launch">Launch</Link></li>
            <li><Link to="/mission-control">Mission Control</Link></li>
            <li><Link to="/galaxy-explorer">Galaxy Explorer</Link></li>
            <li><Link to="/planet-explorer">Planet Explorer</Link></li>
            <li><Link to="/the-romans">The Romans</Link></li>
            <li><Link to="/chatbot">Chat Bot</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/launch" element={<LaunchPage />} />
          <Route path="/mission-control" element={<MissionControlPage />} />
          <Route path="/galaxy-explorer" element={<GalaxyExplorerPage />} />
          <Route path="/planet-explorer" element={<PlanetExplorerPage />} />
          <Route path="/the-romans" element={<TheRomansPage />} />
          <Route path="/chatbot" element={<ChatBotPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


// function App() {


//   return (
//     <div className="container">
//       <div className="Sky+text">
//         <img className="logoimage" src="/header.png" alt="header" />
//         <h1>Im working</h1>
//       </div>
//     </div>
//   );
// }

// export default App;
