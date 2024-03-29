import React from 'react'
import 'semantic-ui-css/semantic.min.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthProvider } from './context/auth'
import AuthRoute from './util/AuthRoute'

import Login from './pages/Login'
import NotFound from './pages/NotFound'
import AdminApp from './pages/AdminApp'

export default function App() {
	return (
    <AuthProvider>
      <Router>
        <Route exact path={["/", "/home"]} component={AdminApp} />
        <Route path='/notfound' component={NotFound} />
        <AuthRoute path='/login' component={Login} />
      </Router>
    </AuthProvider>
	)
}
