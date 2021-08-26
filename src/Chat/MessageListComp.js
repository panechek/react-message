import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    messageList: {
        height: "90%",
        borderLeft: "1px solid rgb(7, 0, 0)",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        overflow: "auto",
    },
    message: {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
    },
    messageText: {
        border: "1px solid green",
        borderRadius: "5px",
        padding: "5px 10px",
        margin: "5px 0",
        color: "rgb(250, 248, 248)",
        backgroundColor: "green",
        fontSize: "24px",
    },

    messageTime: {
        fontSize: "10px",
        color: "dimgray",
    },

    messageAuthor: {
        fontSize: "15px",
        color: "rgb(5, 80, 28)",
    },

    botMessage: {
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
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


const MessageListComp = (props) => {

    const classes = useStyles();

   
    const chats= props.chats
    const messageId = props.chatId;
    console.log(chats[messageId]);
    return <div class={classes.messageList}>
        {chats[messageId].messages.map((message, i) => {
            const authorMessage = message.author ==='bot'
            return  (
        <div className={authorMessage ? classes.botMessage : classes.message} key={i}>
                <div className={authorMessage ? classes.botMessageText :classes.messageText}>{message.text}</div>
                <div className={classes.messageTime}>{message.time}</div>
                <div className={classes.messageAuthor}>{message.author}</div>
            </div>)})}
    </div>
};

export default MessageListComp;

