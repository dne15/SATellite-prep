import React from 'react';
import './PlanetExplorerPage.css';
function PlanetExplorerPage() {
  return (
    <div className="planet-explorer-page">
      <div className="back-symbol">{'<'}</div> {/* Adding the back symbol */}
      <h1 className="planet-title"> Planet Explorer</h1>
      <img className="galaxy-background2" src="/romansbackground.png" alt="Galaxy" />
      <div className="planets-container">
        <img className="PlanetSubjects" src="/planets.png" alt="Galaxy" />
        <div className="romans-planet-container">
          <img className="romans-planet" src="/planet3.png" alt="Bottom Planet" />
        </div>
        <div className="astronaut-container">
            <img className="astronaut" src="/atronaut-with-flag.png" alt="Astronaut" />
        </div>
      </div>
    </div>
  );
}
export default PlanetExplorerPage;