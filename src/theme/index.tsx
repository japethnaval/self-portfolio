import { MuiThemeProvider as ProvideTheme } from '@material-ui/core/styles'
import * as React from 'react'

import theme from './baseTheme'

interface IThemeProps {
  children: React.ReactNode
}

const ThemeProvider: React.FC<IThemeProps> = ({ children }) => (
  <ProvideTheme theme={theme}>{children}</ProvideTheme>
)

export default ThemeProvider
