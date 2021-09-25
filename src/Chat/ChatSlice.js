import {
  createSlice
} from '@reduxjs/toolkit';
import moment from 'moment'

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    isAuthenticated: false,
    myUid: '',
    messages: {},

    profiles: [{
        id: 2,
        name: 'Ваня Иванов',
        avatar: 'https://material-ui.com/static/images/avatar/2.jpg',
      },
      {
        id: 3,
        name: 'Катя Петрова',
        avatar: 'https://material-ui.com/static/images/avatar/3.jpg',
      },
      {
        id: 4,
        name: 'Папа',
        avatar: 'https://material-ui.com/static/images/avatar/1.jpg',
      },
    ],

    myId: 1,
  },
  reducers: {

    addMessage: (state, action) => {
      const {
        chatId,
        trimmedMessage,
        authorId
      } = action.payload;
      state.messages = {
        ...state.messages,
        [chatId]: [
          ...state.messages[chatId],
          {
            timeStamp: moment().valueOf(),
            authorId,
            text: trimmedMessage,
          },
        ],

      };
    },

    setMessages: (state, action) => {
      const {
        chatId,
        messages
      } = action.payload;


      state.messages = {
        ...state.messages,
        [chatId]: messages,
      };
    },

    changeIsAuth: (state, action) => {
      state.isAuthenticated = action.payload;
    },

    setMyUid: (state, action) => {
      state.myUid = action.payload;
    }

  },
})


export const {
  addMessage,
  changeIsAuth,
  setMessages,
  setMyUid
} = chatSlice.actions;

export default chatSlice.reducer