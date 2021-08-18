import React, {
  useEffect,
  useState
} from 'react';
import './App.css';
import Message from './MessageComp';
import MessageListComp from './MessageListComp'


function App() {

  const [inputMessage, setInputMessage] = useState('');
  const [author, setAuthor] = useState('');
  const [messageArray, setMessageArray] = useState([]);


  console.log({ messageArray })


  let message = {
    text: '',
    time: new Date().toLocaleString(),
    author: ''
  }

  const makeMessage = (text, author) => {

    message.text = text;
    message.author = author

  }

  const onSendMessage = () => {

    makeMessage(inputMessage, 'guess');
    setMessageArray(prev => [...prev, message]);
    setAuthor('guess');
    setInputMessage('');
    console.log(message)
  }


  useEffect(() => {

    makeMessage('Привет', 'bot');
    setMessageArray(prev => [...prev, message]);
    setAuthor('bot');
  }, [])

  useEffect(() => {
    console.log({ message })
    if (author === 'guess') {
      switch (message.text) {
        case 'Привет':
          makeMessage('Как дела?', 'bot');
          setMessageArray(prev => [...prev, message]);
          setAuthor('bot');
          break;
        case 'Хорошо':
          makeMessage('Я рад!', 'bot');
          setMessageArray(prev => [...prev, message]);
          setAuthor('bot');
          break;
        default:
          makeMessage('Ничего не понятно', 'bot');
          setMessageArray(prev => [...prev, message]);
          setAuthor('bot');
      }


      // console.log({ message })

    }
  }, [message])


  return (
    <div className="messanger">

      <MessageListComp messageArray={messageArray} />
      <Message value={inputMessage} onChange={setInputMessage} onClick={onSendMessage} />



    </div>
  );
}

export default App;