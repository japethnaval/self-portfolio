import * as React from 'react'
import ThemeProvider from '../theme'
import App from './App'

const Root: React.FC = () => {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  )
}

export default Root
