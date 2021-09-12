import React, {
  useEffect,
  useState,

} from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux'
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

function Chat() {

  const urlParams = useParams();
  const chatId = Number.parseInt( urlParams.id);


  const classes = useStyles();
  const dispatch = useDispatch();

  const [inputMessage, setInputMessage] = useState('');

  const {chats} = useSelector(state => state.chat);
  const messagesArray = chats.find((chat) => chat.id === chatId).messagesArray;

  const background = useSelector(state => state.profile);
 console.log(chatId)

  const onSendMessage = () => {
    const trimmedMessage = inputMessage.trim();

    if (trimmedMessage !== "") {
      dispatch(addMessage({
        chatId, trimmedMessage
        // text: trimmedMessage,
        // time: new Date().toLocaleString(),
        // author: 'guess'
      }));
  };
  setInputMessage('')
};

  useEffect(() => {
    if (messagesArray.lenght > 0) {
      setTimeout(() => {
        console.log('Сообщение оправлено')
      })
    }
  }, [messagesArray])







  return ( <div className = { classes.messanger} style={background} >
    <div className = {classes.activChat} >
    <MessageListComp  messagesArray={  messagesArray}/>  
    <Message value = {inputMessage} onChange = {setInputMessage} onClick = {onSendMessage} />  
     </div > 
     </div>
  );
}

export default Chat;