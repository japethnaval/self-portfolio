import React from 'react'
import 'react-perfect-scrollbar/dist/css/styles.css'
import './App.scss'

import {
  Route,
  Switch,
  HashRouter as Router,
  Redirect,
} from 'react-router-dom'
import Routes from '../@routes'

const App = () => {
  return (
    <Router>
      <Switch>
        {Routes.map((item) => {
          if (item.redirect) {
            return (
              <Route
                exact
                path="/"
                key={item.id}
                render={() => <Redirect to="/profile" />}
              />
            )
          }
          return (
            <Route
              path={item.path}
              key={item.id}
              render={() => item.reactNode}
            />
          )
        })}
      </Switch>
    </Router>
  )
}

export default App
