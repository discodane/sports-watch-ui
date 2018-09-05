import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'

const Root = () => (
  <Router>
    <Route path="/" component={App} />
  </Router>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root