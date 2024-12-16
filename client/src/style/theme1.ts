import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            light: '#b4d6e4',
            main: '#09BC8A',
            dark: '#004346',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        }
    }
})

export default theme