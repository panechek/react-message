import {
    configureStore
} from "@reduxjs/toolkit";
import chatReducer from "./Chat/ChatSlice";
import profileReducer from "./Profile/ProfileSlice"

export default configureStore({
    reducer: {
        chat: chatReducer,
        profile: profileReducer
    }
})