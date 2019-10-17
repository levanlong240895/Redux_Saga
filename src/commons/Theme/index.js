import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
    color: {
        primary: '#D32F2F',
        secondary: '#00BCD4',
        error: '#E64A19',
        textColor: '#FFFFFF'
    },
    typography: {
        frontFamily: 'Roboto'
    },
    shape: {
        borderRadius: 4,
        backgroundColor: '#512DA8',
        textColor: '#FFFFFF',
        border: '#CCCCCC'
    }
});

export default theme;