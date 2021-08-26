import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import {Link} from 'react-router-dom';


   


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


   
    const ChatListComp = ({chats, chatId}) => {

        const classes = useStyles();

        return (<List className={classes.root}>
            { Object.keys(chats).map((id, i) => {
                console.log(`/chat/${id}`)
                 return ( <div key={i}>
                    <Link to={`/chat/${id}`} >
            <ListItem alignItems="flex-start" >
                
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText style= {{color: id ===chatId ? "#000000" : "grey" }}>
                   
                    {chats[id].chatName}
                   
               
             </ListItemText>
             </ListItem>
             </Link>
             </div>
             )
            }
            )
            }
    
     </List>);
    }
            

export default ChatListComp;