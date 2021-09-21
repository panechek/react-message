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
    blacklist: ['weather', 'chat', 'profile']
}

const reducers = combineReducers({
    chat: chatReducer,
    profile: profileReducer,
    weather: weatherReducer

});

const persistedReducer = persistReducer(persistConfig, reducers)

export default configureStore({
    reducer: persistedReducer

        ,
    middleware: [ThunkMiddleware]
})