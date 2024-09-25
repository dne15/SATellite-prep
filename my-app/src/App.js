function App() {


  // Handles user input changes
  function handleChange(event) { 
    setUserInput(event.target.value);
  }

  return (
    <div className="container">
      <div className="Sky+text">
        <img className="logoimage" src="/header.png" alt="header" />
      </div>
    </div>
  );
}

export default App;
