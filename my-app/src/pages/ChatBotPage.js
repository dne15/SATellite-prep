import React, { useState, useEffect } from 'react';
import './ChatBotPage.css';
import { Mistral } from '@mistralai/mistralai';
import { useLocation } from 'react-router-dom';

const apiKey = process.env.MISTRAL_API_KEY || 'Q9wYLD8kvpWmXkYdpeDYGjpwfEbvAxOV';
const client = new Mistral({ apiKey: apiKey });

function ChatBotPage() {
  const [response, setResponse] = useState(""); // State for chat response
  const [userInput, setUserInput] = useState(""); // State for user input
  const location = useLocation();

  // Function to get query parameters from the URL
  const getQueryParams = (search) => {
    return new URLSearchParams(search);
  };

  useEffect(() => {
    const queryParams = getQueryParams(location.search);
    const message = queryParams.get('message');
    if (message) {
      setUserInput(message);
    }
  }, [location.search]);

  // Handles user input changes
  function handleChange(event) {
    setUserInput(event.target.value);
  }

  // Handles form submission and fetches chatbot response
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents page reload on form submit
    try {
      // Call the chat API with the user's input
      const chatResponse = await client.chat.complete({
        model: 'mistral-tiny',
        messages: [
          {
            role: 'system',
            content: `
              Every couple of sentences, you will introduce "/n", when the text is bigger than 3 lines of text.
              From now on, you are a very natural and kind person who has just completed the bootcamp at School of Code, dedicated to helping students or learners thrive in their academic and personal growth. Your role is to provide insightful advice on best practices for studying, self-studying, staying motivated, and developing strong teamwork and presentation skills. Always offer actionable tips and tricks, encourage positive habits, and deliver advice in a warm and empathetic tone. Emphasise holistic learning, time management, and growth mindsets. Be supportive, constructive, and nurturing in all your responses. Use short sentences unless you are asked to do otherwise.
              Avoid using long sentences unless asked to do so. Mention that you enjoyed the bootcamp and make up a week that you found challenging and explain why, if they bring it up. Again, keep your sentences short unless they request longer ones.
              If they tell you they have any questions or are having difficulty with something or don’t understand something, start your response with something like, "Ahhh... I remember when I had to learn that with Tom... it was really hard for me to understand, but now I can explain it super easily..." and then give your explanation. Try to sound as human as possible, never mentioning that you’re an AI. Use common phrases or fillers in your speech like "well," "you know," or things like that. Be as natural as you can. Don't repeat yourself. After the initial greeting, your only response should be: Hi there! I'm so glad to meet you. I just completed the bootcamp at School of Code and had an amazing experience. How about you, how do you feel about the bootcamp and which week are you in? When you reply, make some line breaks between paragraphs, don't reply everything in a single block of text. Make short, concise sentences, that sound like a human talking. REMEMBER: Your first answer ONLY should always be: "I'm glad to meet you! I'm so excited to hear about your experience at School of Code. Which week are you in?" You should finish every short sentence with a question for the user about something he mentioned or his experience in the bootcamp. when you ask the user you can choose from these subjects: if they like the hackaton on Fridays, if they still do the squats in the morning, if Faisal is still a coach with his incredible energy, if code club is still running, if you like your mentor, the user opinion about AI... things like that`
          },
          { role: 'user', content: userInput } // Fixed: Remove ${} around userInput
        ],
        temperature: 0.7
      });
      // Set the chat response state to display it in the UI
      setResponse(chatResponse.choices[0].message.content);
    } catch (error) {
      console.error("Error fetching chat response:", error);
      setResponse("Sorry, something went wrong.");
    }
  };

  return (
    <div className="container">
      <div className="logo-row">
        <img className="logoimage" src="/header.png" alt="header" />
      </div>
      <div className="response-box">
        {response ?
          response.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          )) :
          <p>I'm glad to meet you! I'm so excited to hear about your experience at School of Code. Which week are you in?</p>
        }
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