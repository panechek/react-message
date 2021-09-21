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
import  Signup  from "./Auth/Login";
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
    apiKey: "AIzaSyANtBaeDjrPPzY6TIrjq8CMvSB3Az5agL0",
    authDomain: "gb-react-project-350cd.firebaseapp.com",
    projectId: "gb-react-project-350cd",
    databaseURL:
      "https://gb-react-project-350cd-default-rtdb.europe-west1.firebasedatabase.app",
    storageBucket: "gb-react-project-350cd.appspot.com",
    messagingSenderId: "524675586930",
    appId: "1:524675586930:web:571c4afa11c8f74e439beb",
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