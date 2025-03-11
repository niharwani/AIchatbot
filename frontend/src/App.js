import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    setLoading(true);
    setMessages([...messages, { sender: 'user', text: input }]);

    const response = await fetch('https://your-backend-url/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    });

    const data = await response.json();
    setMessages([...messages, { sender: 'user', text: input }, { sender: 'bot', text: data.response }]);
    setLoading(false);
    setInput('');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="chat-box bg-white p-4 rounded-lg shadow-lg">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        {loading && <div className="loading">Typing...</div>}
      </div>
      <div className="input-box mt-4 flex">
        <input
          type="text"
          className="input flex-grow p-2 border rounded-l-lg"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="send-button p-2 bg-blue-500 text-white rounded-r-lg"
          onClick={sendMessage}
        >
          Send
        </motion.button>
      </div>
    </div>
  );
}

export default App;