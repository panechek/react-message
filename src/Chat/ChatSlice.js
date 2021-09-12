import {
  createSlice
} from '@reduxjs/toolkit';
import moment from 'moment'

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messagesArray: [],
    myId: 1,
    chats: [
      {
        id: 2,
        name: 'Ваня Иванов',
        avatarUrl: 'https://material-ui.com/static/images/avatar/2.jpg',
        messagesArray: [
          {
            timeStamp: moment('1995-12-17T03:24:00'),
            userId: 1,
            text: 'Привет',
            isRead: true,
          },
          {
            timeStamp: moment('1995-12-17T03:24:00'),
            userId: 2,
            text: 'Здорово. Как дела? Когда увидимся?',
            isRead: false,
          },
        ]
      },
      {
        id: 3,
        name: 'Катя Петрова',
        avatarUrl: 'https://material-ui.com/static/images/avatar/3.jpg',
        messagesArray: [
          {
            timeStamp: moment('1995-12-17T03:24:00'),
            userId: 1,
            text: 'Как дела?',
            isRead: true,
          },
          {
            timeStamp: moment('1995-12-17T03:24:00'),
            userId: 3,
            text: 'Норм',
            isRead: false,
          },
        ]
      },
      {
        id: 4,
        name: 'Папа',
        avatarUrl: 'https://material-ui.com/static/images/avatar/1.jpg',
        messagesArray: [
          {
            timeStamp: moment('1995-12-17T03:24:00'),
            userId: 1,
            text: 'Ты где?',
            isRead: true,
          },
          {
            timeStamp: moment('1995-12-17T03:24:00'),
            userId: 4,
            text: 'Сплю',
            isRead: false,
          },
        ]
      }
    ]
  },
  reducers: {

    addMessage: (state, action) => {
      const {chatId, trimmedMessage} = action.payload;
      const chatIndex = state.chats.findIndex((chat) => chat.id === chatId);
      // const time = moment();
      state.chats[chatIndex].messagesArray.push({
        text: trimmedMessage, timeStamp: new moment(), isRead: false, userId: state.myId
      })

      state.messagesArray.push(action.payload)
    }

  }
})

export const {
  addMessage
} = chatSlice.actions;

export default chatSlice.reducer