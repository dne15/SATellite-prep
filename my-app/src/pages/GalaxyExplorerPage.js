import React from 'react';
import './GalaxyExplorerPage.css'; // Assuming you'll create this CSS file

function GalaxyExplorerPage() {
  return (
    <div className="galaxy-explorer-page">
      <div className="back-symbol">{'<'}</div> {/* Adding the back symbol */}
      <h1 className="title"> Galaxy Explorer</h1>
      <img className="galaxy-background" src="/romansbackground.png" alt="Galaxy" />
      <div className="galaxy-container">
        <img className="SelectionPlanets" src="/SelectionPlanets.png" alt="Galaxy" />
        <div className="hover-planet-container">
          <img className="history-planet" src="/HistoryButton.png" alt="Bottom Planet" />
        </div>
      </div>
    </div>
  );
}

export default GalaxyExplorerPage;