import {
    createSlice
} from '@reduxjs/toolkit';

export
const WEATHER_API_URL = 'https://goweather.herokuapp.com/weather/Moskow'

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        loading: false,
        error: false,
        data: null
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setData: (state, action) => {
            state.data = action.payload;
        },

    },

});

export const {
    setLoading,
    setError,
    setData
} = weatherSlice.actions;

export default weatherSlice.reducer;