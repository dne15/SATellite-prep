// import React, { useState } from 'react';
// import './App.css';
// import { Mistral } from '@mistralai/mistralai';

// const apiKey = process.env.MISTRAL_API_KEY || 'Q9wYLD8kvpWmXkYdpeDYGjpwfEbvAxOV';

// const client = new Mistral({ apiKey: apiKey });

// function App() {
//   const [response, setResponse] = useState(""); // State for chat response
//   const [userInput, setUserInput] = useState("Hi there!"); // State for user input

//   // Handles user input changes
//   function handleChange(event) { 
//     setUserInput(event.target.value);
//   }

//   // Handles form submission and fetches chatbot response
//   const handleSubmit = async (event) => {
//     event.preventDefault(); // Prevents page reload on form submit

//     try {
//       // Call the chat API with the user's input
//       const chatResponse = await client.chat.complete({
//         model: 'mistral-tiny',
//         messages: [
//           { role: 'system', content: `You are an expert on year 6 curriculum.
// `},
//           { role: 'user', content: `${userInput}` }
//         ],
//         temperature: 0.7
//       });

//       // Set the chat response state to display it in the UI
//       setResponse(chatResponse.choices[0].message.content);
//     } catch (error) {
//       console.error("Error fetching chat response:", error);
//       setResponse("Sorry, something went wrong.");
//     }
//   };

//   return (
//     <div className="container">
//       <div className="logo-row">
//         <img className="logoimage" src="/header.png" alt="header" />
//       </div>

//       <div className="response-box">
//         <span>{response}</span> {"WELCOME TO SPACE COMPANION"}
//       </div>

//       <form className="input-row" onSubmit={handleSubmit}>
//         <input 
//           value={userInput}
//           name="query"
//           onChange={handleChange}
//           placeholder="Ask a question..." 
//           className="user-input"
//         />
//         <button className="button" type="submit">
//           <img src="/arrow.png" alt="Send" />
//         </button>
        
//       </form>
//     </div>
//   );
// }

// export default App;
