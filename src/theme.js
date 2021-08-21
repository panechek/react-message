import {
    createTheme
} from '@material-ui/core/styles'
import {
    green,
    orange
} from "@material-ui/core/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: green[500],
        },
        secondary: {
            main: orange[500]
        },
    },
});