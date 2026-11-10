import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material'
import App from './App.jsx'
import { InventarioProvider } from './context/InventarioContext.jsx'
import theme from './theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <InventarioProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </InventarioProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
