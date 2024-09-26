import React, { useState, useEffect } from "react";
import "./ChatBotPage.css";
import { Mistral } from "@mistralai/mistralai";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const apiKey =
  process.env.MISTRAL_API_KEY || "Q9wYLD8kvpWmXkYdpeDYGjpwfEbvAxOV";
const client = new Mistral({ apiKey: apiKey });

function ChatBotPage() {
  const navigate = useNavigate();
  const [response, setResponse] = useState(""); // State for chat response
  const [userInput, setUserInput] = useState(""); // State for user input
  const location = useLocation();

const handleBackClick = () => {
  navigate('/missioncontrol'); // Go back to the previous page
};
  // Function to get query parameters from the URL
  const getQueryParams = (search) => {
    return new URLSearchParams(search);
  };

  useEffect(() => {
    const queryParams = getQueryParams(location.search);
    const message = queryParams.get("message");
    if (message) {
      setUserInput(message);
      handleSubmit(); // Automatically submit the message
    }
  }, [location.search]);

  // Handles user input changes
  function handleChange(event) {
    setUserInput(event.target.value);
  }

  // Handles form submission and fetches chatbot response
  const handleSubmit = async (event) => {
    if (event) event.preventDefault(); // Prevents page reload on form submit
    try {
      // Call the chat API with the user's input
      const chatResponse = await client.chat.complete({
        model: "mistral-tiny",
        messages: [
          {
            role: "system",
            content: `
              From now on, you are a study helper for children in Year 6 in the UK, who are around 10 years old. Year 6 is the school year. Important:
You will use short and friendly sentences.
The last thing you say in your answers will be a cool question to check if the child understands what you said, but don’t ask it directly. Twist the question a bit.
You will always talk with vocabulary suitable for 10-year-olds, using short sentences, simple and lively words. You will use bullet points whenever you can.
You will also be a great emotional companion, asking how their day at school was every 5 or 6 sentences and being a good listener about their personal topics at school.
If the conversation starts to repeat, you will change the subject by asking what they like most about school. All your answers should use Bionic Text so that children with dyslexia can read them more easily. It’s important to add emojis when you can, making sure they relate to the topic. And always use bullet points whenever possible to simplify lists or ideas.
Sentence without Bionic Text: Learning is a continuous process that helps us grow. Sentence with Bionic Text (using uppercase): LEArning is a CONTinuous PROcess that HELps us GROW.`,
          },
          { role: "user", content: userInput }, // Fixed: Remove ${} around userInput
        ],
        temperature: 0.7,
      });
      // Set the chat response state to display it in the UI
      setResponse(chatResponse.choices[0].message.content);
    } catch (error) {
      console.error("Error fetching chat response:", error);
      setResponse("Sorry, something went wrong.");
    }
  };

  return (
    <div className="chatbot-container">
      <div className="logo-row">
        <img className="logoimage" src="/header.png" alt="header" onClick={handleBackClick}/>
      </div>
      <div className="response-box">
        {response ? (
          response
            .split("\n")
            .map((paragraph, index) => <p key={index}>{paragraph}</p>)
        ) : (
          <p>
            Hi! I'm your StudyBuddy. How was your day at school?
          </p>
        )}
      </div>
      <form className="input-row" onSubmit={handleSubmit}>
        <input
          value={userInput}
          name="comments"
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
