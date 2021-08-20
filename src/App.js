import React, {
  useEffect,
  useState
} from 'react';
import './App.css';
import Message from './MessageComp';
import MessageListComp from './MessageListComp'


function App() {

  const [inputMessage, setInputMessage] = useState('');
  const [messageArray, setMessageArray] = useState([]);


  console.log({ messageArray })




  const onSendMessage = () => {

    setMessageArray(prev => [...prev, {
      text: inputMessage,
      time: new Date().toLocaleString(),
      author: 'guess'
    }]);
    setInputMessage('');
  }


  useEffect(() => {

    setMessageArray(prev => [...prev, {
      text: 'Привет',
      time: new Date().toLocaleString(),
      author: 'bot'
    }]);
  }, [])

  useEffect(() => {
    setTimeout(() => {

      if (messageArray.length !== 0) {

        if ((messageArray[messageArray.length - 1].author) === 'guess') {
          console.log('done')
          switch (messageArray[messageArray.length - 1].text) {
            case 'Привет':
              setMessageArray(prev => [...prev, {
                text: 'Как дела?',
                time: new Date().toLocaleString(),
                author: 'bot'
              }]);
              break;
            case 'Хорошо':
              setMessageArray(prev => [...prev, {
                text: 'Я рад!',
                time: new Date().toLocaleString(),
                author: 'bot'
              }]);
              break;
            default:
              setMessageArray(prev => [...prev, {
                text: 'Ничего не понял',
                time: new Date().toLocaleString(),
                author: 'bot'
              }]);
          }


          console.log({})
        }
      }
    }, 1000)
  }, [messageArray])


  return (
    <div className="messanger">

      <MessageListComp messageArray={messageArray} />
      <Message value={inputMessage} onChange={setInputMessage} onClick={onSendMessage} />



    </div>
  );
}

export default App;