import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TheRomansPage() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSendMessage = () => {
    console.log('Sending message:', message);
    navigate('/chatbot');
  };

  return (
    <div className="the-romans-page">
      <h1>The Romans</h1>
      <video width="320" height="240" controls>
        <source src="/path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
      />
      <button onClick={handleSendMessage}>Send to Chat Bot</button>
    </div>
  );
}

export default TheRomansPage;