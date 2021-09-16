
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
import Paper from '@material-ui/core/Paper';
import moment from "moment";
  

  const useStyles = makeStyles(() => ({
    wrapper: {
        width: '500px',
        height: '100vh',
        display: 'flex'
    },

    paperWrapper: {
        height: '50%',
        margin: '5px',
        display: 'flex',
        padding: '10px',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    title: {
        textAlign: 'center',
        marginBottom: '15px'
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
        // setInterval(() => {
       getWeatherInfoThunk();
        // },1500)
    }, [getWeatherInfoThunk])
    

    return (<div className={classes.wrapper}> 
        <Paper className={classes.paperWrapper}>
        <Typography variant="h3" className={classes.title}>WEATHER FORECAST</Typography>
        <Typography>
        {moment().format('MMMM Do YYYY, h:mm:ss')}</Typography>
        <Typography>Temperature {data.temperature}</Typography>
            <Typography>Wind{data.wind}</Typography>
            <Typography>{data.description}</Typography>

           
            </Paper>
        </div>
    )
}

export default Weather