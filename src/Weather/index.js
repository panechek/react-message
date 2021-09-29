

import {
    makeStyles
  } from '@material-ui/core/styles';
  
  import {
    useSelector,
    useDispatch
  } from 'react-redux';
import { useCallback, useEffect } from 'react';
import  Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import moment from "moment";

import Box from '@material-ui/core/Box';
import  CircularProgress from '@material-ui/core/CircularProgress';
import {getWeatherForecast} from './actions'
  

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
      
    },

    title: {
        textAlign: 'center',
        marginBottom: '15px',
        height: '100px',
        position: 'static'
    },

    mistake: {
        height: '100px'
    },

    data: {
        textAlign: 'start'
    },

    forecast: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },

    dataMistake: {
        
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center'

    }

  }));

  

const Weather = () => {
    
    const classes = useStyles(); 
    const dispatch = useDispatch();
    const {data, error, loading} = useSelector((state) => state.weather);
    console.log (data, error, loading);
    

    const getWeatherInfoThunk = useCallback(() => dispatch(getWeatherForecast()), [dispatch])

    useEffect(()=> {
        setInterval(() => {
       getWeatherInfoThunk();
      
        },60000)
    }, [getWeatherInfoThunk])

    if(!data.current_weather ){
        return (
            <div className={classes.dataMistake}>
            <CircularProgress />
            </div>
        )
    }

    

    return (<div className={classes.wrapper}> 

        <Paper className={classes.paperWrapper}>
        
        <Typography variant="h3" className={classes.title}>WEATHER FORECAST</Typography>
        <Typography className={classes.data}>
        {moment().format('MMMM Do YYYY ')}
        </Typography>
            <div className={classes.forecast}>
            <div className={classes.mistake}>
            {loading &&  <CircularProgress />}
            {error &&  <div>Mistake</div>} 
            {/* {!data.current_weather && <CircularProgress /> } */}
            </div>

            {!loading && !error && data && (
            
                <Box className={classes.paperWrapper}>

       
            <Typography>Temperature {data.current_weather.temperature} C</Typography>
            <Typography>Wind {data.current_weather.windspeed} m/s</Typography>
            
            </Box>
            )}
           </div>
            </Paper>
        </div>
    )
}

export default Weather