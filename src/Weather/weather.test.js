import {
    weatherReducer,
    setLoading
} from './WeatherSlice'

describe('get weather', () => {
    it('is loading', () => {
        const weather = weatherReducer({
                loading: false
            },
            setLoading(true))

        expect(weather.loading).toBe(true)
    })
})