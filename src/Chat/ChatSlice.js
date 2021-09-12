import {
  createSlice
} from '@reduxjs/toolkit';
import moment from 'moment'

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: {
    2: [
          {
            timeStamp: moment('1995-12-17T03:24:00').valueOf(),
            authorId: 1,
            text: 'Привет',
          },
          {
            timeStamp: moment('1995-12-17T03:24:00').valueOf(),
            authorId: 2,
            text: 'Здорово. Как дела? Когда увидимся?',
          },
        ],
    
         3: [
        
          {
            timeStamp: moment('1995-12-17T03:24:00').valueOf(),
            authorId: 3,
            text: 'Как дела?',
          },
          {
            timeStamp: moment('1995-12-17T03:24:00').valueOf(),
            authorId: 1,
            text: 'Норм',
          },
        ],
      
         4: [
        
          {
            timeStamp: moment('1995-12-17T03:24:00').valueOf(),
            authorId: 4,
            text: 'Ты где?',
          },
          {
            timeStamp: moment('1995-12-17T03:24:00').valueOf(),
            authorId: 1,
            text: 'Сплю',
          },
        ],
  },

  profiles: [
    {
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
      const {chatId, trimmedMessage, authorId } = action.payload;
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
    },
  })


export const {
  addMessage
} = chatSlice.actions;

export default chatSlice.reducer