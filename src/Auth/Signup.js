import {
    useState
} from "react";
import {
    Link, useHistory
} from "react-router-dom";

import {
    useDispatch
} from "react-redux";

import firebase from 'firebase/compat/app';
import { changeIsAuth } from "../Chat/ChatSlice";
import {db} from '../App';





const Signup = () => {
    
        const [email, setEmail] = useState("");
        const [name, setName] = useState("");
        const [surname, setSurname] = useState("");
        const [password, setPassword] = useState("");
        const [error, setError] = useState("");
        const dispatch = useDispatch();
        const history = useHistory();


        const handlePassChange = (e) => {
            setPassword(e.target.value);
        };
        const handleNameChange = (e) => {
          setName(e.target.value);
      };

      const handleSurnameChange = (e) => {
        setSurname(e.target.value);
    };


        const handleEmailChange = (e) => {
            setEmail(e.target.value);
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            setError("");

            try {
                const {user} = await firebase.auth().createUserWithEmailAndPassword(email, password);
                await db.ref('profiles').child(user.uid).set ({
                  name, surname
                })
                dispatch(changeIsAuth(true));
                history.push('/profile');
            } catch (error) {
                setError(error.message);
            }
        };
  
    
        return (
            <div>
              <form onSubmit={handleSubmit}>
                <p>Fill in the form below to register new account.</p>
                <div>
                  <input
                    placeholder="Name"
                    name="name"
                    type="name"
                    onChange={handleNameChange}
                    value={name}
                  />
                </div>
                <div>
                  <input
                    placeholder="Surname"
                    name="surname"
                    type="surname"
                    onChange={handleSurnameChange}
                    value={surname}
                  />
                </div>
                <div>
                  <input
                    placeholder="Email"
                    name="email"
                    type="email"
                    onChange={handleEmailChange}
                    value={email}
                  />
                </div>
                <div>
                  <input
                    placeholder="Password"
                    name="password"
                    onChange={handlePassChange}
                    value={password}
                    type="password"
                  />
                </div>
                <div>
                  {error && <p>{error}</p>}
                  <button type="submit">Login</button>
                </div>
                <hr />
                <p>
                  Already have an account? <Link to="/login">Sign in</Link>
                </p>
              </form>
              
            </div>
          );
}

    export default Signup
  