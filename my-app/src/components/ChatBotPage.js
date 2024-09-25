import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mistral } from '@mistralai/mistralai';

const apiKey = process.env.REACT_APP_MISTRAL_API_KEY || 'Q9wYLD8kvpWmXkYdpeDYGjpwfEbvAxOV';
const client = new Mistral({ apiKey: apiKey });

// Function to parse query parameters
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function ChatBotPage() {
  const query = useQuery();
  const initialMessage = query.get('message') || '';
  const [response, setResponse] = useState("WELCOME TO SPACE COMPANION");
  const [userInput, setUserInput] = useState(initialMessage);

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const chatResponse = await client.chat.complete({
        model: 'mistral-tiny',
        messages: [
          { role: 'system', content: 'You are an expert on year 6 curriculum.' },
          { role: 'user', content: userInput }
        ],
        temperature: 0.7
      });

      setResponse(chatResponse.choices[0].message.content);
    } catch (error) {
      console.error("Error fetching chat response:", error);
      setResponse("Sorry, something went wrong.");
    }
  };

  return (
    <div className="chatbot-page">
      <h1>Chat Bot</h1>
      <div className="response-box">
        <span>{response}</span>
      </div>
      <form className="input-row" onSubmit={handleSubmit}>
        <input 
          value={userInput}
          name="query"
          onChange={handleChange}
          placeholder="Ask a question..." 
          className="user-input"
        />
        <button className="button" type="submit">
          <img src="/arrow.png" alt="Send" />
        </button>
      </form>
    </div>
  );
}

export default ChatBotPage;