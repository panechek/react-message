import {
    BrowserRouter as Router,
    Switch,
    Route,
    
} from "react-router-dom";
import Chat from "./Chat";
import Weather from "./Weather";
import Home from "./Home";

import Profile from "./Profile";
import {
    makeStyles
  } from '@material-ui/core/styles';
import  Signup  from "./Auth/Signup";
import  Login  from "./Auth/Login";

import firebase from 'firebase/compat'
import CustomRoute from "./util/CustomRoute";

  


  const useStyles = makeStyles(() => ({
    wrapper: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-between'
    }

  }));

  export const firebaseConfig = {
    apiKey: "AIzaSyA7bt3BgH-8qE2c_dM-TbJkXHBKIynHxuY",
    authDomain: "gb-react-message.firebaseapp.com",
    databaseURL: "https://gb-react-message-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gb-react-message",
    storageBucket: "gb-react-message.appspot.com",
    messagingSenderId: "162443891411",
    appId: "1:162443891411:web:7e979607597691b7d3fa26"
};
  
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.database();


const App = () => {

    const classes = useStyles();


    

    return (<Router >
        <div className={classes.wrapper}>
            {/* <AppBar  /> */}
            <Switch>
                <CustomRoute secured path="/chat/:id"  >
                    <Chat />
                </CustomRoute>
                <Route path="/login">
                    <Login /> 
                </Route>
                <Route path="/signup">
                    <Signup /> 
                </Route>
                <CustomRoute path="/Profile" secured withAppBar={true}>
                    <Profile />
                </CustomRoute>
                <CustomRoute path="/" withAppBar={false}>
                    <Home />
                </CustomRoute>

                <Route>
                    <h3>Page not found</h3>
                </Route>


            </Switch> 
            <Weather />
            </div>
        </Router>)
};

export default App