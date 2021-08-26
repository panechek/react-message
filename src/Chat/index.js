import React, {
  useEffect,
  useState,
  
} from 'react';
import Message from './MessageComp';
import MessageListComp from './MessageListComp';
import ChatListComp from './ChatListComp';
import {
  makeStyles
} from '@material-ui/core/styles';
import { useParams } from 'react-router';

// const initialChats = { 
//   id1:{
  
//     chatName: 'Bill',
//    messages: [],
//   },
//   id2:{
  
//     chatName: 'Phill',
//    messages: [],
//   },
//   id3:{
  
//     chatName: 'Jake',
//    messages: [],
//   },
// };

const useStyles = makeStyles(() => ({
  messanger: {
    height: "80vh",
    display: "flex",
    border: "1px solid black",
    margin: "0 auto",
    width: "800px",
   borderBottom: "none"

  },

  activChat: {
    width: "600px",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between"
    
   
  }

}));

function Chat() {

  const initialChats = { 
    id1:{
    
      chatName: 'Bill',
     messages: [{text: "Hi" ,
      time: new Date().toLocaleString(),
      author: 'guess'}],
    },
    id2:{
    
      chatName: 'Phill',
     messages: [{text:  "Hey",
      time: new Date().toLocaleString(),
      author: 'guess'}],
    },
    id3:{
    
      chatName: 'Jake',
     messages: [{text:  "Hello",
     time: new Date().toLocaleString(),
     author: 'guess'}],
    },
  };

  const {chatId} = useParams();
  console.log({chatId});
 
  const classes = useStyles();

  const [inputMessage, setInputMessage] = useState('');
  const [messageArray, setMessageArray] = useState([]);
  const [chats, setChats] = useState (initialChats);
 
  console.log({ messageArray})
 


  
 



  const onSendMessage = () => {
    const trimmedMessage = inputMessage.trim();

    if (trimmedMessage !== "") {
      setMessageArray(prev => [...prev, {
        text: trimmedMessage,
        time: new Date().toLocaleString(),
        author: 'guess'
      }]);
    
     
      setChats(() => chats[chatId].messages.push(messageArray));
      console.log(chats[chatId].messages);
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


          console.log({});
       
      } 
        ;
        
      } 
    }, 1000)
  }, [messageArray])

  


  return ( <div className = {classes.messanger}>
            <ChatListComp chats={chats} chatId={chatId}/> 
            <div className = {classes.activChat} >
              <MessageListComp chats={chats} chatId={chatId}/>  
              <Message value = { inputMessage } onChange = { setInputMessage } onClick = {onSendMessage }/>  
            </div> 
          </div>
  );
}

export default Chat;