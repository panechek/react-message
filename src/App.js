import React, { useState } from 'react';
import './App.css';
import Message from './Message';


function App() {

  const [inputText, setInputText] = useState('')

  return (
    <div>
      <input value={inputText} onChange={(e) => setInputText(e.target.value)} style={{ width: 400, height: 100, color: 'green', fontSize: 64 }} />
      <Message textToShow={inputText} />

    </div>
  );
}

export default App;