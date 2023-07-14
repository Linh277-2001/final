import React, { useState } from 'react';
import "./App.css"
function App() {
  const [messages, setMessages] = useState([]);

  const handleAdd = () => {
    setMessages([...messages, 'Hello World']);
  };

  const handleDelete = () => {
    if (messages.length > 0) {
      const updatedMessages = [...messages];
      updatedMessages.pop();
      setMessages(updatedMessages);
    }
  };

  return (
    <div style={{marginLeft:20}}>
      <button className='btn1' onClick={handleAdd}>Add</button>
      <button className='btn1' onClick={handleDelete}>Delete</button>
      {messages.map((message, index) => (
        <p className='hello' key={index}>{message}</p>
      ))}
    </div>
  );
}

export default App;
