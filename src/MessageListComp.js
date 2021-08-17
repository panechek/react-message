const MessageListComp = (props) => {


    return <div class="messageList">
        {props.messageArray.map((message, i) => (<div className="message" key={i}><div className="message-text">{message.text}</div><div className="message-time">{message.time}</div><div className="message-author">{message.author}</div></div>))}
    </div>
};

export default MessageListComp;