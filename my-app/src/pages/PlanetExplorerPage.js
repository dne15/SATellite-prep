import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './PlanetExplorerPage.css';
function PlanetExplorerPage() {
  const navigate = useNavigate(); // Create a navigate function
  const handleRomansPlanetClick = () => {
    navigate('/theromanspage');
  }; 

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="planet-explorer-page">
      <div className="back-symbol" onClick={handleBackClick}>{'<'}</div>
      <h1 className="planet-title"> Planet Explorer</h1>
      <img className="galaxy-background2" src="/romansbackground.png" alt="Galaxy" />
      <div className="planets-container">
        <img className="PlanetSubjects" src="/planets.png" alt="Galaxy" />
        <div className="romans-planet-container">
          <img className="romans-planet" src="/planet3.png" alt="Bottom Planet" onClick={handleRomansPlanetClick} />
        </div>
        <div className="astronaut-container">
            <img className="astronaut" src="/atronaut-with-flag.png" alt="Astronaut" />
        </div>
      </div>
    </div>
  );
}
export default PlanetExplorerPage;