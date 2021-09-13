import { useState } from "react";
import {
    AppBar as MaterialUiAppBar, InputAdornment
} from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';
import  Box  from "@material-ui/core/Box";
import {
    Link,
    useLocation, useHistory
} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import {
    makeStyles
} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import  IconButton  from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import  MenuItem  from "@material-ui/core/MenuItem";
import  TextField  from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { useSelector, useDispatch } from "react-redux";
import ChatPrewiew from "./ChatPrewiew";


const useStyles = makeStyles((theme) => ({
    link: {
        // color: theme.palette.background.default,
        color: 'black',
        textDecoration: "none"
    },
    bar: {
        width: "400px",
        display: "flex",
        justifyContent: "space-between",
        marginLeft: "auto",
        marginRight: "auto"

    },
    activeLink: {
        textDecoration: "underline"
    },

    top: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    root: {
        marginRight:'350px'
    },

    wrapper: {
        width: '350px',
        padding: '10px 10px 10px 0'
    },

    input: {
        "& div": {
        borderRadius: '40px',
        "& input": {
            padding: '5px 10px',
        }
    },
},

    chatWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
    ,

  
    
}));

const routes = [{
        pathTitle: "Home",
        path: "/home"
    },
    {
        pathTitle: "Chat",
        path: "/chat/2"
    },
    {
        pathTitle: "Contacts",
        path: "/Contacts"
    },
    {
        pathTitle: "Profile",
        path: "/Profile"
    },
]

const AppBar = () => {

    const classes = useStyles();
    const location = useLocation();
    const {messages, profiles} = useSelector((state) => state.chat);
    

    const pathName = location.pathname;

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    }


    return (


        
        <Drawer variant='permanent' open classes={{paper: classes.wrapper, root: classes.root}}>
            <Box className={classes.top}>
               <IconButton onClick={handleClick}>
                   <MenuIcon />
                </IconButton>
                <Menu  id="menu" anchorEl={anchorEl} open={open} onClose={handleClose} anchorOrigin={{horizontal: "left", vertical: "bottom"}} anchorPosition={{top: 50, left: 6}} anchorReference={'anchorPosition'}>
                {routes.map((route) => ( <Link key = {route.path}
                to = {route.path}
                className = {`${classes.link} ${route.path ===pathName && classes.activeLink}`} >
                <Typography > {route.pathTitle } </Typography> </Link>

            ))
        }
                </Menu>
                <TextField placeholder='Поиск...' variant='outlined' className={classes.input} InputProps={{startAdornment: (<InputAdornment position='start'><SearchIcon /></InputAdornment>)}}/> 
                </Box>
                <Box className={classes.chatWrapper}>
                    {profiles.map((profile, i) => (
                        <ChatPrewiew profile={profile} messages={messages[profile.id]} key={i}/>
                    ))}
                    
                </Box>
        </Drawer>
        

    // <MaterialUiAppBar position = "static"
    // className = {classes.top} >
    //     <Toolbar className = {classes.bar} >

    //     {routes.map((route) => ( <Link key = {route.path}
    //             to = {route.path}
    //             className = {`${classes.link} ${route.path ===pathName && classes.activeLink}`} >
    //             <Typography > {route.pathTitle } </Typography> </Link>

    //         ))
    //     }


    //     </Toolbar>  
    //     </MaterialUiAppBar>
    )
}

export default AppBar