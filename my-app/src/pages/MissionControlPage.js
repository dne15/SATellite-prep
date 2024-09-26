import React from 'react';
import './MissionControlPage.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
const MissionControlPage = () => {
  return (
    <div>
      <Link to="/galaxyexplorer"> {/* Cambiado a minúsculas */}
        <img className='fullImage' src='/ControlPannel.png' alt='Background' />
      </Link>
      {/*
      <header className='header'>
        <h1>Mission Control</h1>
      </header>
      <img className='ControlBackground' src='/ControlBackground.png' alt='Background' />
      <div className='window'>
      </div>
      <div className='buttonsandletters'>
        <div className='button-row1'>
          <img src='/ControlButton.png' alt='Button' className='buttonss' />
          <img src='/ControlArrow.png' alt='Arrow' className='ControlArrow' />
          <span className='button-text2'>Buddy Chatbot</span>
        </div>
        <div className='button-row2'>
          <img src='/ControlButton.png' alt='Button' className='buttonss' />
          <img src='/ControlArrow.png' alt='Arrow' className='ControlArrow' />
          <span className='button-text2'>Galaxy Explorer</span>
        </div>
      </div>
      */}
    </div>
  );
}
export default MissionControlPage;