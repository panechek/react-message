import {
    BrowserRouter as Router,
    Switch,
    Route,
    
} from "react-router-dom";
import Chat from "./Chat";
import Weather from "./Weather";
import Home from "./Home";
import AppBar from "./AppBar";
import Profile from "./Profile";
import {
    makeStyles
  } from '@material-ui/core/styles';


  const useStyles = makeStyles(() => ({
    wrapper: {
        width: '100vw',
        height: '100vh',
        display: 'flex'
    }

  }))



const App = () => {

    const classes = useStyles();

    return (<Router >
        <div className={classes.wrapper}>
            <AppBar  />
            <Switch>
                <Route path="/chat/:id">
                    <Chat />
                </Route>
                {/* <Route path="/contacts">
                    <Contacts />
                </Route> */}
                <Route path="/Profile">
                    <Profile />
                </Route>
                <Route path="/">
                    <Home />
                </Route>

                <Route>
                    <h3>Page not found</h3>
                </Route>


            </Switch> 
            <Weather />
            </div>
        </Router>)
};

export default App