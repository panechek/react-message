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

    chats: {
      // Wfngyi13ghNdX2HqENWeeZznmna2: {
      //   chatId: ''
      // },
      // zmVy24VvO8gw1aXwnLv0qSZVz1U2: {
      //   chatId: ''
      // },
      // "UAogk6WhddbZzD5MpDvx4lwdIli2"
      // [{
      //     id: 2,
      //     name: 'Ваня Иванов',
      //     avatar: 'https://mui.com/static/images/avatar/2.jpg',
      //   },
      //   {
      //     id: 3,
      //     name: 'Катя Петрова',
      //     avatar: 'https://mui.com/static/images/avatar/3.jpg',
      //   },
      //   {
      //     id: 4,
      //     name: 'Папа',
      //     avatar: 'https://mui.com/static/images/avatar/1.jpg',
      //   },
      // ],
    },

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

    setChat: (state, action) => {
      // const {
      //   targetUid,
      //   chatId
      // } = action.payload;
      state.chats = {
        ...state.chats,
        ...action.payload,
      }
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
  setMyUid,
  setChat
} = chatSlice.actions;

export default chatSlice.reducer