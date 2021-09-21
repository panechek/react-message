import SvgIcon from '@material-ui/core/SvgIcon';
import {
  makeStyles
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  home: {

    display: "flex",
    justifyContent: "center",
    width: '60%',
    flexDirection: 'column',
    alignItems: 'center'

  },

  buttons: {
    display: "flex",
    justifyContent: 'space-around',
    width: '100%'

  }
}));



const Home = () => {

  const classes = useStyles();
  const history = useHistory();

  function HomeIcon(props) {

    return  <SvgIcon {...props} >
      <path d = "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    
  };

  return (<div className = {classes.home} >
    <HomeIcon style = {{fontSize: 800, color: "orange"}}/>
    
     <div className={classes.buttons}>
       <Button variant="contained" color="primary"
        onClick={() => history.push(`/signup`)}>Зарегистрироваться

       </Button>
       <Button variant="contained" color="primary"
        onClick={() => history.push(`/login`)}>Войти

       </Button>
     </div>
     </div >
     )
};

export default Home