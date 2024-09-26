import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './GalaxyExplorerPage.css'; // Assuming you'll create this CSS file
function GalaxyExplorerPage() {
  const navigate = useNavigate(); // Create a navigate function
  const handleHistoryPlanetClick = () => {
    setTimeout(() => {
      navigate('/planetexplorer');
    }, 1000); // Delay navigation by 1 second (1000 milliseconds)
  };
  const handleBackClick = () => {
    navigate('/missioncontrol'); // Go back to the previous page
  };

  return (
    <div className="galaxy-explorer-page">
     <div className="back-symbol" onClick={handleBackClick}>{'<'}</div>
      <h1 className="title"> Galaxy Explorer</h1>
      <img className="galaxy-background" src="/main-space.png" alt="Galaxy" />
      <div className="galaxy-container">
        <img className="SelectionPlanets" src="/2-galaxies.png" alt="Galaxy" />
        <div className="hover-planet-container">
          <img className="history-planet" src="/history-galaxy.png" alt="Bottom Planet" onClick={handleHistoryPlanetClick}/>
        </div>
      </div>
    </div>
  );
}
export default GalaxyExplorerPage;