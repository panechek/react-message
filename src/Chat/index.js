import React, {
  useEffect,
  useState,

} from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';

import Message from './MessageComp';
import MessageListComp from './MessageListComp';
import {
  makeStyles
} from '@material-ui/core/styles';
import {
  useParams
} from 'react-router-dom';
import {
  sendMessageWithThunk,initMessageTracking
} from './actions'





const useStyles = makeStyles(() => ({
  messanger: {
    height: "100vh",
    display: "flex",
    margin: "0 auto",
    width: '60%',
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
  const chatId = Number.parseInt(urlParams.id);


  const classes = useStyles();
  const dispatch = useDispatch();

  const [inputMessage, setInputMessage] = useState('');

  const messages = useSelector((state) => state.chat.messages[chatId]);
  console.log(messages, 'mc')
  const myId = useSelector((state) => state.chat.myId);

  const background = useSelector(state => state.profile);
  console.log(chatId);

  //  

  const onSendMessage = () => {
    const trimmedMessage = inputMessage.trim();

    if (trimmedMessage !== "") {
      dispatch(sendMessageWithThunk({
        chatId,
        trimmedMessage,
        authorId: myId

      }));
    };
    setInputMessage('')
  };

  useEffect(() => {
    
    if (document.getElementsByClassName("messageList")[0]) {
      document.getElementsByClassName("messageList")[0].scrollTop = 999999;
    }
  });





  return ( <div className = {classes.messanger} style = {background}>
    <div className = {classes.activChat}>
    <MessageListComp messagesArray = {
      messages
    }/>   
    <Message value = {
      inputMessage
    }
    onChange = {
      setInputMessage
    }
    onClick = {
      onSendMessage
    }
    /> 
      </div>
       </div>
  );
}

export default Chat;