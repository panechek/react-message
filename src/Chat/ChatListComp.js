import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';





    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100vw',
            maxWidth: '36ch',
            borderBottom: "1px solid black"

        },
        inline: {
            display: 'inline',
        },
    }));


   
    const ChatListComp = (props) => {

        const classes = useStyles();

        return (<List className={classes.root}>
             {props.chatArray.map((chat, i) => {
                 return (
            <ListItem alignItems="flex-start" key={i}>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary={chat.chatName}
                    secondary={<React.Fragment>
                                <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary">
                               {chat.id}
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
         )
    }
    )
    }
     </List>);
    }


export default ChatListComp;