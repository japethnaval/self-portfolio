import * as React from 'react'
import ThemeProvider from '../theme'
import App from './App'
import Appbar from './components/Appbar'

const Root: React.FC = () => {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <Appbar />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  )
}

export default Root
