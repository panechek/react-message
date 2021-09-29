import {
    getWeatherInfoThunk
} from './index'

test('get data', () => {
    const weather = getWeatherInfoThunk();
    expect(weather).toBe(!null)
})