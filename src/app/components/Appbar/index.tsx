import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MuiAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import isMobile from 'is-mobile'
import Menu from '@material-ui/core/Menu'
import styles from './styles.module.scss'
import IconButton from '../IconButton'
import HomeIcons, { IToolbarProps } from '../HomeIcons'

const AppBar: React.FC<IToolbarProps> = ({
  onClickHome,
  onClickPhone,
  onClickTools,
  onClickUser,
}: IToolbarProps) => {
  const IS_MOBILE = isMobile()

  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = React.useState<null | HTMLElement>(null)

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const mobileMenuId = 'mobileMenuId'
  const renderMobileMenu = (
    <Menu
      elevation={1}
      classes={{
        paper: styles.paperRoot,
      }}
      keepMounted
      anchorEl={mobileMoreAnchorEl}
      id={mobileMenuId}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <HomeIcons
        onClickHome={onClickHome}
        onClickPhone={onClickPhone}
        onClickTools={onClickTools}
        onClickUser={onClickUser}
      />
    </Menu>
  )

  return (
    <div className={styles.grow}>
      <MuiAppBar position="static">
        <Toolbar>
          {IS_MOBILE ? (
            <div className={styles.actionContainer}>
              <IconButton
                controls={mobileMenuId}
                onClick={handleMobileMenuOpen}
              >
                <FontAwesomeIcon icon="chevron-circle-down" />
              </IconButton>
            </div>
          ) : (
            <div className={styles.actionContainer}>
              <HomeIcons
                onClickHome={onClickHome}
                onClickPhone={onClickPhone}
                onClickTools={onClickTools}
                onClickUser={onClickUser}
              />
            </div>
          )}
        </Toolbar>
      </MuiAppBar>
      {renderMobileMenu}
    </div>
  )
}

export default AppBar
