import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {
  makeStyles
} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import {
  useHistory,
  useLocation
} from "react-router-dom";
import clsx from "clsx";
import moment from "moment";
import {
  db
} from '../App';
import {
  useObjectVal
} from 'react-firebase-hooks/database'

const useStyles = makeStyles((theme) => ({

  wrapper: {
    width: '100%',
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
    display: 'flex',
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

const ChatPrewiew = ({
  uid
}) => {

  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  // const {
  //   avatar,
  //   name,
  //   id
  // } = profile;

  const [snapshot, loading, error] = useObjectVal(db.ref('profiles').child(uid));

  if (loading) {
    return <div>Loading</div>
  };

  if (error) {
    return <div>Error</div>
  };

  if (snapshot){
  
    const{name, surname} = snapshot;
  

  const locationSplitted = location.pathname.split("/");

  const isSelected =
    locationSplitted[1] === "chat" && locationSplitted[2] === uid;

  // const lastMessage =
  //   messages.length > 0 ?
  //   messages[messages.length - 1] : {
  //     text: "",
  //     timeStamp: null
  //   };

    return (
        <Box 
      
      className={clsx(classes.wrapper, {
        [classes.selectedChat]: isSelected,
      })}
      onClick={() => history.push(`/chat/${uid}`)}
    >
      <Avatar alt="Remy Sharp" src={null} />

      <Box className={classes.contentWrapper}>
        <Typography variant="h6" className={classes.overFlowText}>
          {name} {surname}
        </Typography>
        <Typography variant="subtitle1" className={classes.overFlowText}>
          {/* {lastMessage.text} */}
        </Typography>
      </Box>

      <Box className={classes.infoContentWrapper}>
        <Typography variant="caption">
          {/* {moment(lastMessage.timeStamp).format("h:mm")} */}
        </Typography>
      </Box>
    </Box>
  );
};

return null
};

export default ChatPrewiew