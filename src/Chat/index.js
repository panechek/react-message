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
import ChatListComp from './ChatListComp';
import {
  makeStyles
} from '@material-ui/core/styles';





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


  const classes = useStyles();
  const dispatch = useDispatch();
  const [inputMessage, setInputMessage] = useState('');
  const {messagesArray} = useSelector(state => state.chat)


  const onSendMessage = () => {
    const trimmedMessage = inputMessage.trim();

    if (trimmedMessage !== "") {
      dispatch(addMessage({
        text: trimmedMessage,
        time: new Date().toLocaleString(),
        author: 'guess'
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







  return ( <div className = { classes.messanger}>
    <ChatListComp  messagesArray = {messagesArray}/>  
    <div className = {classes.activChat} >
    <MessageListComp  />  
    <Message value = {inputMessage} onChange = {setInputMessage} onClick = {onSendMessage} />  
     </div > 
     </div>
  );
}

export default Chat;