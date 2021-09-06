import {
    BrowserRouter as Router,
    Switch,
    Route,
    
} from "react-router-dom";
import Chat from "./Chat";
import Contacts from "./Contacts";
import Home from "./Home";
import AppBar from "./AppBar";
import Profile from "./Profile"



const App = () => {

    

    return <Router >
            <AppBar  />
            <Switch>
                <Route path="/chat">
                    <Chat />
                </Route>
                <Route path="/contacts">
                    <Contacts />
                </Route>
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
        </Router>
};

export default App