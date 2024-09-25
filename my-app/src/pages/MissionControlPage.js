import React from 'react';
import './MissionControlPage.css';

const MissionControlPage = () => {
  return (
    <div className="mission-control">
        <header className='header'>
          <h1>Mission Control</h1>
        </header>
        <img className='ControlBackground' src='/ControlBackground.png' alt='Background' />

        <div className='window'>
        </div>

        <div className='button-row'>
            <img src='/ControlArrow.png' alt='Arrow' className='ControlArrow' />
            <img src='/ControlButton.png' alt='Button' className='button'/>
            <span className='button-text2'>Galaxy Explorer</span>
        </div>

    </div>
  );
}

export default MissionControlPage;