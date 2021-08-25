import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    button: {
        // background: "green",
        // '&:hover': {
        //     background: 'forestgreen'
        // },
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

    return (
        <div className={classes.messageOn}>
            <TextField className={classes.textField}
                label="Введите сообщение"
                id="outlined-basic"
                variant="outlined"
                multiline
                autoFocus
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
                onKeyDown={( e ) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        props.onClick()
                    }
                }} />
            <Button variant="contained" color="primary" className={classes.button} onClick={() => props.onClick()}>Оправить</Button>
        </div>
    )
};

export default Message;
