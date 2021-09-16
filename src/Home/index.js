import SvgIcon from '@material-ui/core/SvgIcon';
import {
  makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  home: {

    display: "flex",
    justifyContent: "center",
    width: '60%'

  },
}));



const Home = () => {

  const classes = useStyles();

  function HomeIcon(props) {

    return ( <
      SvgIcon {
        ...props
      } >
      <
      path d = "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" / >
      <
      /SvgIcon>
    );
  }

  return <div className = {
    classes.home
  } > < HomeIcon style = {
    {
      fontSize: 800,
      color: "orange"
    }
  }
  /> </div >
};

export default Home