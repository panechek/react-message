import {
    createSlice
  } from '@reduxjs/toolkit'
  
  export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
      background: "none",
    },
    reducers: {
  
      changeBack: (state, action) => {
         
        state.background=(action.payload)
      }
  
    }
  })
  
  export const {
    changeBack
  } = profileSlice.actions;
  
  export default profileSlice.reducer