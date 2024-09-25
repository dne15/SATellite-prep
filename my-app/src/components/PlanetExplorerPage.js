import React from 'react';

function PlanetExplorerPage() {
  const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus'];

  return (
    <div className="planet-explorer-page">
      <h1>Planet Explorer</h1>
      {planets.map((planet, index) => (
        <button key={index}>Explore {planet}</button>
      ))}
    </div>
  );
}

export default PlanetExplorerPage;