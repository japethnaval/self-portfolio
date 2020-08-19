import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

const theme = createMuiTheme({
  spacing: 8,
  palette: {
    primary: { main: '#131929' },
    secondary: { main: '#00d763' },
    error: { main: '#f04141' },
    warning: { main: '#ffce00' },
    success: { main: '#00d763' },
    info: { main: '#13D2FC' },
    background: {
      default: '#f4f7fc',
    },
    text: {
      primary: '#444451',
      disabled: '#f4f7fc',
    },
  },
})

export default theme
