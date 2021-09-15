import React, {
  useEffect,
  useState,

} from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import {
  addMessage
} from './ChatSlice';
import Message from './MessageComp';
import MessageListComp from './MessageListComp';
import {
  makeStyles
} from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';





const useStyles = makeStyles(() => ({
  messanger: {
    height: "100vh",
    display: "flex",
    // border: "1px solid black",
    margin: "0 auto",
    width: '100%',
    borderBottom: "none"

  },

  activChat: {
    width: '100%',
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between"


  }

}));


const sendMessageWithThunk = (message) => (dispatch, getState) =>{
  const {chat} = getState();
  const myId = chat.myId;
  dispatch(addMessage(message));
  if (message.authorId === myId){
    const botMessage = {
      chatId: message.chatId,
      trimmedMessage: "Пора спать",
      authorId:  message.chatId,
    };
    setTimeout(() => dispatch(addMessage(botMessage)), 1500);
  }
};

function Chat() {

  const urlParams = useParams();
  const chatId = Number.parseInt( urlParams.id);


  const classes = useStyles();
  const dispatch = useDispatch();

  const [inputMessage, setInputMessage] = useState('');

  const messages = useSelector((state) => state.chat.messages[chatId]);
  const myId = useSelector((state) => state.chat.myId);

  const background = useSelector(state => state.profile);
 console.log(chatId);

//  

  const onSendMessage = () => {
    const trimmedMessage = inputMessage.trim();

    if (trimmedMessage !== "") {
      dispatch(sendMessageWithThunk({
        chatId, trimmedMessage, authorId: myId
        
      }));
  };
  setInputMessage('')
};



 






  return ( <div className = { classes.messanger} style={background} >
    <div className = {classes.activChat} >
    <MessageListComp  messagesArray={  messages}/>  
    <Message value = {inputMessage} onChange = {setInputMessage} onClick = {onSendMessage} />  
     </div > 
     </div>
  );
}

export default Chat;