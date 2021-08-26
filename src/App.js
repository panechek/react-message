import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Chat from "./Chat";
import Contacts from "./Contacts";
import Home from "./Home"
import AppBar from "./AppBar";

const App = () => {

    

    return <Router >
            <AppBar  />
            <Switch>
                <Route path="/chat/:chatId">
                    <Chat />
                </Route>
                <Route path="/contacts">
                    <Contacts />
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