import {useSelector, useDispatch} from 'react-redux';
import Button from '@material-ui/core/Button';
import { changeBack } from './ProfileSlice';
import {
    makeStyles
  } from '@material-ui/core/styles';

  const useStyles = makeStyles(() => ({
    changeBack: {
      height: "50px",
      border: "1px solid orange",
      width: "50px",
     
    },

    changeBackWrapper: {
        width: "800px",
        display: "flex",
        margin: "0 auto",
        justifyContent: "space-between",
        height: 'max-content'
    }

}
  ))


const Profile = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const background = useSelector(state => state.profile);
    
    console.log({background})
    
    const onChangeBack = () => {
        dispatch(changeBack("orange"));
        console.log(background)
    };

    return (<div className = { classes.changeBackWrapper}> 
        <div>CHOOSE BACK</div>
        <Button variant="contained" color="secondary" onClick={onChangeBack} >ORANGE</Button>
        <div className = {classes.changeBack} style={background}></div>
        </div>
    )
}

export default Profile