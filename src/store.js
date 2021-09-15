import {
    configureStore,
    combineReducers
} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import chatReducer from "./Chat/ChatSlice";
import profileReducer from "./Profile/ProfileSlice";
import weatherReducer from './Weather/WeatherSlice'
import ThunkMiddleware from "redux-thunk";
import persistReducer from "redux-persist/es/persistReducer";


const persistConfig = {
    key: 'root',
    storage,
    blackList: ['weather']
}

const reducers = combineReducers({
    chat: chatReducer,
    profile: profileReducer,
    weather: weatherReducer

});

const persistedReducer = persistReducer(persistConfig, reducers)

export default configureStore({
    reducer:
        // chat: chatReducer,
        persistedReducer
        // profile: profileReducer
        ,
    middleware: [ThunkMiddleware]
})