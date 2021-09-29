import {
    createSlice
} from '@reduxjs/toolkit';

export
const WEATHER_API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=55.7558&longitude=37.6176&current_weather=true&timezone=Europe%2FMoscow'

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        loading: false,
        error: false,
        data: {}
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