import {
    initializeApp
} from "firebase/app";
import * as firebaseAuth from "firebase/auth";

export const firebaseConfig = {
    apiKey: "AIzaSyA7bt3BgH-8qE2c_dM-TbJkXHBKIynHxuY",
    authDomain: "gb-react-message.firebaseapp.com",
    projectId: "gb-react-message",
    storageBucket: "gb-react-message.appspot.com",
    messagingSenderId: "162443891411",
    appId: "1:162443891411:web:48ec877b08dae3a1d3fa26"
};

export const app = initializeApp(firebaseConfig);

export const authFirebase = firebaseAuth;