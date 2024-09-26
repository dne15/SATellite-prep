import React from 'react';
import './MissionControlPage.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
const MissionControlPage = () => {
  return (
    <div className='megacontainer'>
      <Link to="/galaxyexplorer">
        <img className='ControlPannel' src='/ControlPannel.png' alt='Background'/>
      </Link>
      <img className='astronaut' src='/astronaut.png' alt='astronaut'/>
      <img className='astronaut2' src='/astronaut2.png' alt='astronaut2'/>
      <img className='sky' src='/sky.png' alt='sky'/>
      <img className='mars' src='/mars.png' alt='mars'/>
      <img className='orangeplanet' src='/orangeplanet.png' alt='orangeplanet'/>
    </div>
  );
}
export default MissionControlPage;