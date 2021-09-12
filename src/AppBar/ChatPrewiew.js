import Box  from "@material-ui/core/Box";
import  Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import  Avatar from "@material-ui/core/Avatar";
import { useHistory, useLocation } from "react-router-dom";
import clsx from "clsx";
import moment from "moment";

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

    selectedChat: {
        backgroundColor: "orange",
        "&:hover": {
          backgroundColor: "orange",
        },
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

const ChatPrewiew = ({messages, profile}) => {

    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const {avatar, name,  id } = profile;

    const locationSplitted = location.pathname.split("/");

  const isSelected =
    locationSplitted[1] === "chat" &&
    Number.parseInt(locationSplitted[2]) === id;

  const lastMessage =
    messages.length > 0
      ? messages[messages.length - 1]
      : { text: "", timeStamp: null };

    return (
        <Box 
      
      className={clsx(classes.wrapper, {
        [classes.selectedChat]: isSelected,
      })}
      onClick={() => history.push(`/chat/${id}`)}
    >
      <Avatar alt="Remy Sharp" src={avatar} />

      <Box className={classes.contentWrapper}>
        <Typography variant="h6" className={classes.overFlowText}>
          {name}
        </Typography>
        <Typography variant="subtitle1" className={classes.overFlowText}>
          {lastMessage.text}
        </Typography>
      </Box>

      <Box className={classes.infoContentWrapper}>
        <Typography variant="caption">
          {moment(lastMessage.timeStamp).format("h:mm")}
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatPrewiew