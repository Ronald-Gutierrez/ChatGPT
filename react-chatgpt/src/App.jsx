import React, { useState } from 'react';
import axios from 'axios';

import './App.css'; // Asegúrate de importar tu archivo CSS

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8080/chat', { prompt })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <h1>Chat with GPT-3</h1>

      {/* Form for entering a prompt */}
      <form onSubmit={handleSubmit}>
        <label>
          Enter a prompt:
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {/* Display the response */}
      <div className="response">
        <h2>Response:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default App;
