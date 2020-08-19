import React from 'react'
import MuiAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const AppBar: React.FC = () => {
  return (
    <MuiAppBar position="static">
      <Toolbar />
    </MuiAppBar>
  )
}

export default AppBar
