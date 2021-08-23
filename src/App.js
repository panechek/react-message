import React, {
  useEffect,
  useState
} from 'react';
import './App.css';
import Message from './MessageComp';
import MessageListComp from './MessageListComp';
import ChatListComp from './ChatListComp';
import { makeStyles } from '@material-ui/core/styles';



function App() {

  // const useStyles = makeStyles(() => ({
  //   messanger: {
  //     height: "80vh",
  //     display: "flex",
  //     border: "1px solid rgb(7, 0, 0)",
  //     margin: "0 auto",
  //     width: "800px",

  //   },


  // }));


  // const classes = useStyles();

  const [inputMessage, setInputMessage] = useState('');
  const [messageArray, setMessageArray] = useState([]);
  // const [chatArray, setChatArray] = useState ([]);

  console.log({ messageArray })

  
  const chatArray = [
    {
      chatName: 'Bill',
      id: 'Lorem ipsum dolor sit amem'
    },
    {
      chatName: 'Jake',
      id: 'Consectetur adipisicing elit. Possimus, nam.'
    },
    {
      chatName: 'Daine',
      id: 'Sunt ipsum quam aut unde optio! Atque.'
    },
  

  ]

// madeChatList()

  const onSendMessage = () => {
    const trimmedMessage = inputMessage.trim();

    if (trimmedMessage !== "") {
      setMessageArray(prev => [...prev, {
        text: trimmedMessage,
        time: new Date().toLocaleString(),
        author: 'guess'
      }]);
      setInputMessage('');
    }
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
      <ChatListComp chatArray = {chatArray} />
      <div className="activChat">


        <MessageListComp messageArray={messageArray} />
        <Message value={inputMessage} onChange={setInputMessage} onClick={onSendMessage} />
      </div>


    </div>
  );
}

export default App;