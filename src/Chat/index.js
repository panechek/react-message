import React, {  useEffect,  useState,} from 'react';
import {  useSelector,  useDispatch} from 'react-redux';

import Message from './MessageComp';
import MessageListComp from './MessageListComp';
import {  makeStyles} from '@material-ui/core/styles';
import {  useParams} from 'react-router-dom';
import {  sendMessageWithThunk, initMessageTracking} from './actions'





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
  const targetUId = urlParams.id;
  const chats = useSelector ((state) => state.chat.chats);

  const targetProfileId = Object.keys(chats).find((profileId)=> profileId );

    const classes = useStyles();
  const dispatch = useDispatch();

  const [inputMessage, setInputMessage] = useState('');

 
 
  const myUid = useSelector((state) => state.chat.myUid);

  const background = useSelector(state => state.profile);
  const chatId = chats[targetProfileId] ? chats[targetProfileId].chatId :null;
  const messages = useSelector((state) => state.chat.messages[chatId]);

  const onSendMessage = () => {
    const trimmedMessage = inputMessage.trim();

    if (trimmedMessage !== "") {
      dispatch(sendMessageWithThunk({
        chatId,
        trimmedMessage,
        authorUid: myUid,
        targetUid: targetUId,

      }));
    };
    setInputMessage('')
  };

 
  useEffect(() => {
    
    if (document.getElementsByClassName("messageList")[0]) {
      document.getElementsByClassName("messageList")[0].scrollTop = 999999;
    }
  });

  if (!targetProfileId || !chatId) {
    return <div>Ошибка</div>
  };

  
  

  return ( <div className = {classes.messanger} style = {background}>
    <div className = {classes.activChat}>
    <MessageListComp messagesArray = {messages}/>   
    <Message value = {inputMessage} onChange = {setInputMessage}
    onClick = {onSendMessage}/> 
      </div>
       </div>
  );
}

export default Chat;