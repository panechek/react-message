
import Button from '@material-ui/core/Button';
import {
    makeStyles
  } from '@material-ui/core/styles';
  import { setLoading, setData, setError, WEATHER_API_URL} from './WeatherSlice';
  import {
    useSelector,
    useDispatch
  } from 'react-redux';
import { useCallback, useEffect } from 'react';
import  Typography from '@material-ui/core/Typography';
  

  const useStyles = makeStyles(() => ({
    wrapper: {
        width: '500px',
        height: '100vh',
        display: 'flex'
    }

  }));

  const getWeatherInfo =  () => async(dispatch, getState) =>{
    const {weather: {data, loading, error}} = getState();
  

    if ( !loading){
        try {
            dispatch(setError(false));
            dispatch(setLoading(true));
        const response = await fetch(WEATHER_API_URL);
        if (!response.ok) {
            throw new Error('Mistake');
        };
        const results = await response.json();
        console.log(results);
        dispatch(setData(results));
        } catch (e) {
            dispatch(setError(true));
        }  finally {
            dispatch(setLoading(false));
        }
    }


  };

const Weather = () => {
    
    const classes = useStyles(); 
    const dispatch = useDispatch();
    const {data, error, loading} = useSelector((state) => state.weather);
    console.log (data, error, loading);

    const getWeatherInfoThunk = useCallback(() => dispatch(getWeatherInfo()), [dispatch])

    useEffect(()=> {
       getWeatherInfoThunk();
    }, [getWeatherInfoThunk])
    

    return (<div className={classes.wrapper}> 
        <Typography> {data.temperature} </Typography>
        
        </div>
    )
}

export default Weather