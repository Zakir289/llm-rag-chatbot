import { useState } from 'react';


function App() {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    const res = await fetch('http://localhost:3001/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    });
    const data = await res.json();
    setChat([...chat, { user: input, bot: data.reply }]);
    setInput('');
  };

  return (
    <div className="App">
      <h1>LLM + RAG Chat</h1>
      <div className="chat-window">
        {chat.map((c, i) => (
          <div key={i}>
            <p><b>You:</b> {c.user}</p>
            <p><b>Bot:</b> {c.bot}</p>
          </div>
        ))}
      </div>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask something..." />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
