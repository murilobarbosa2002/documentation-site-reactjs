import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { GlobalStyle, Colors} from './global/theme'
import { ThemeProvider } from 'styled-components'
ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={Colors}>
        <GlobalStyle />
        <App />
    </ThemeProvider>
)
