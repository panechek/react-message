import React, {
  useEffect,
  useState
} from 'react';
import './App.css';
import Message from './MessageComp';
import MessageListComp from './MessageListComp'


function App() {

  const [inputMessage, setInputMessage] = useState('');
  const [botMessage, setBotMessage] = useState('Привет')
  const [messageArray, setMessageArray] = useState([]);


  console.log({ messageArray })

  const message = {
    text: inputMessage,
    time: new Date().toLocaleString(),
    author: 'guess'

  }

  const onSendMessage = () => {

    setMessageArray(prev => [...prev, message]);
    setInputMessage('');
  }



  const botTextMessage = {
    text: botMessage,
    time: new Date().toLocaleString(),
    author: 'bot'
  }

  // useEffect(() => {

  //   messageArray.push(botTextMessage);
  //   console.log(messageArray)
  // }, [])

  useEffect(() => {

    switch (inputMessage) {
      case 'Привет':
        setBotMessage('Как дела?')
        setMessageArray(prev => [...prev, botTextMessage]);
        break;
      case 'Хорошо':
        setBotMessage('Я очень рад')
        setMessageArray(prev => [...prev, botTextMessage]);
        break;
      default:
        setBotMessage('Я ничего не понял')
        setMessageArray(prev => [...prev, botTextMessage]);
    }
    setBotMessage('')

  }, [setMessageArray])


  return (
    <div className="messanger">

      <MessageListComp messageArray={messageArray} />
      <Message value={inputMessage} onChange={setInputMessage} onClick={onSendMessage} />



    </div>
  );
}

export default App;