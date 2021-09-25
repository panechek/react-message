import { makeStyles } from '@material-ui/core/styles';
import {useSelector, } from 'react-redux';

import moment from "moment";

const useStyles = makeStyles(() => ({
    messageList: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        overflow: "auto",
        width: '100%'
    },
    userMessage: {
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
    },
    messageText: {
        border: "1px solid green",
        borderRadius: "10px",
        padding: "5px 10px",
        margin: "5px 0",
        color: "rgb(250, 248, 248)",
        backgroundColor: "green",
        fontSize: "14px",
    },

    messageTime: {
        fontSize: "10px",
        color: "dimgray",
    },

    messageAuthor: {
        fontSize: "15px",
        color: "rgb(5, 80, 28)",
    },

    senderMessage: {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        
    },

    botMessageText: {
        border: "1px solid orange",
        borderRadius: "5px",
        padding: "5px 10px",
        margin: "5px 0",
        color: "rgb(250, 248, 248)",
        backgroundColor: "orange",
        fontSize: "24px",
    }

}))


const MessageListComp = ({messagesArray}) => {

    const classes = useStyles();

    const {myId} = useSelector((state) => state.chat);

    console.log(messagesArray, 'ma')
  
    return (<div className={`${classes.messageList} messageList`}>
        
        {messagesArray && messagesArray.map((message, i) => (
                 
            
        <div className={message.authorId === myId ? classes.userMessage : classes.senderMessage} key={i} >
                <div className={classes.messageText}>{message.trimmedMessage}</div>
                <div className={classes.messageTime}>{moment(message.timeStamp).format('hh:mm')}</div>
                <div className={classes.messageAuthor}>{message.author}</div>
            </div>))}
    </div>)
};



export default MessageListComp;

