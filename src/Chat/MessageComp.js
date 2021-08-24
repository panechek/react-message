import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    button: {

        width: "25%"
    },
    textField: {
        width: "75%",


    },
    messageOn: {
        display: "flex",
        justifyContent: "space-between",
    }
}))

const Message = (props) => {

    const classes = useStyles();

    return ( <div className = { classes.messageOn }>
        <TextField className = { classes.textField }
        label = "Введите сообщение"
        id = "outlined-basic"
        variant = "outlined"
         autoFocus value = {props.value}
        onChange = {(e) => props.onChange(e.target.value)}
        onKeyDown = {({key}) => {
                if (key === 'Enter') {
                    props.onClick()
                }
            }
        }/> 
        <Button variant = "contained"
        color = "primary"
        className = { classes.button}
        onClick = {() => props.onClick()}>Оправить
        </Button> 
        </div>
    )
};

export default Message;