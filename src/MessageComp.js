const Message = (props) => {


    return (
        <div className="message-on">
            <input className="input"
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
                onKeyDown={({ key }) => {
                    if (key === 'Enter') {
                        props.onClick()
                    }
                }} />
            <button className="button" onClick={() => props.onClick()}>Оправить</button>
        </div>
    )
};

export default Message;