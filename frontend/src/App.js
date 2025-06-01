import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const handleSubmit = async () => {
    const res = await axios.post('http://localhost:3001/generate', { prompt });
    setResponse(res.data.response);
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">💬 Chat with Mistral (Local)</h1>
      <textarea
        className="w-full p-2 border"
        rows="4"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask something..."
      />
      <button onClick={handleSubmit} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">
        Send
      </button>
      <pre className="mt-4 bg-gray-100 p-4">{response}</pre>
    </div>
  );
}

export default App;