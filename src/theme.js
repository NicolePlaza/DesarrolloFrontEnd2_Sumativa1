import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32',
    },
    secondary: {
      main: '#f9a825',
    },
    background: {
      default: '#f4f6f8',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
})

export default theme
