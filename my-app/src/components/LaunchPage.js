import React, { useState } from 'react';

function LaunchPage() {
  const [launchCode, setLaunchCode] = useState('');

  const handleLaunch = () => {
    console.log('Launching with code:', launchCode);
    // Add your launch logic here
  };

  return (
    <div className="launch-page">
      <h1>Launch Page</h1>
      <input
        type="text"
        value={launchCode}
        onChange={(e) => setLaunchCode(e.target.value)}
        placeholder="Enter launch code"
      />
      <button onClick={handleLaunch}>Launch</button>
    </div>
  );
}

export default LaunchPage;