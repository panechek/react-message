import {
    configureStore
} from "@reduxjs/toolkit";
import chatReducer from "./Chat/ChatSlice";
import profileReducer from "./Profile/ProfileSlice";
import ThunkMiddleware from "redux-thunk";

export default configureStore({
    reducer: {
        chat: chatReducer,
        profile: profileReducer
    },
    middleware: [ThunkMiddleware]
})