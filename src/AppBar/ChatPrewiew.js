import Box  from "@material-ui/core/Box";
import  Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import  Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles ((theme) =>({

    wrapper: {
        width:'100%',
        margin: '10px 0',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '40px',
        cursor: 'pointer',

        '&:hover': {
            backgroundColor: 'green'
        }
    },

    contentWrapper: {
        width: '65%',
        height: '100%',
        padding: '0 15px '
    },

    infoContentWrwpper: {
        flex: '1',
        margin: '0 10px',
        display:'flex',
        flexDirection: 'column',
        alignItems: 'end'
    },

    overFlowText: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        width: '100%',
        whiteSpace: 'nowrap',
        height: '30px',
        
        
    }
}))

const ChatPrewiew = ({chat}) => {

    const classes = useStyles();

    const {avatarUrl, name, messagesArray, id } = chat;

    const lastMessage = messagesArray.length > 0 ? messagesArray[messagesArray.length -1] : {text: '', timeStamp: null} ;

   

    const unreadMessageCount = messagesArray.reduce((acc, message) => {
        if (message.userId === id && !message.isRead){
            acc++;
        }
        return acc
    },0)

    return (
        <Box className={classes.wrapper}>
            <Avatar alt='Remy Sharp' src={avatarUrl} />
            <Box className={classes.contentWrapper}>
                <Typography variant='h6'>{ name }</Typography>
                <Typography className={classes.overFlowText} variant='subtitle1'>{ lastMessage.text }</Typography>
            </Box>
            <Box className={classes.infoContentWrwpper}>
            
            <Typography variant='caption'>{ lastMessage && lastMessage.timeStamp.format('h:mm') } </Typography>
            <Typography variant='subtitle1'>{unreadMessageCount}</Typography>
            </Box>
        </Box>
    )
}

export default ChatPrewiew