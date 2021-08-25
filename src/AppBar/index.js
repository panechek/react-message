import {
    AppBar as MaterialUiAppBar
} from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';
import {Link, useLocation} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    link: {
        color: theme.palette.background.default,
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
        marginBottom : "50px"
    }
}));

const routes = [ 
    {
    pathTitle: "Home",
    path: "/home"
    },
    {
    pathTitle: "Chat",
    path: "/chat"
    },
    {
    pathTitle: "Contacts",
    path: "/Contacts"
    },
]

const AppBar = () => {

   const classes = useStyles();
   const location = useLocation();

   const pathName = location.pathname;


    return <MaterialUiAppBar position="static" className={classes.top}>
            <Toolbar className={classes.bar}>

                {routes.map((route) =>(
                    <Link key={route.path} to={route.path} className={`${classes.link} ${route.path ===pathName && classes.activeLink}`}>
                    <Typography>
                   {route.pathTitle}
                    </Typography>
                </Link>

                ))}

               
            </Toolbar> 
        </MaterialUiAppBar>
}

export default AppBar