import {
    WEATHER_API_URL,
    setData,
    setError,
    setLoading
} from "./WeatherSlice";

export const getWeatherForecast = () => async (dispatch, getState) => {
    const {
        weather: {
            data,
            loading,
            error
        },
    } = getState();

    if (!loading) {
        try {
            dispatch(setError(false));
            dispatch(setLoading(true));
            const responce = await fetch(WEATHER_API_URL);
            if (!responce.ok) {
                throw new Error("Something went wrong");
            }
            const result = await responce.json();

            dispatch(setData(result));
        } catch (e) {
            dispatch(setError(true));
        } finally {
            dispatch(setLoading(false));
        }
    }
};