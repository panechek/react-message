import {
    configureStore
} from "@reduxjs/toolkit";
import chatReducer from "./Chat/ChatSlice"

export default configureStore({
    reducer: {
        chat: chatReducer,
    }
})