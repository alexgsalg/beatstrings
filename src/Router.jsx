import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Website from './website/Website'

function router() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Website}/>
      </Switch>
    </Router>
  )
}

export default router
