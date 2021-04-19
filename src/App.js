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
		// <Route path="/404" component={NotFound} />
		// <Route path="/admin/login" component={Login} />
		// <Route path="/admin" component={AdminApp} />

    <AuthProvider>
      <Router>
        <AuthRoute path="/">
					<AdminApp />
				</AuthRoute>
        <AuthRoute path='/notfound'>
					<NotFound />
				</AuthRoute>
        <Route path='/login'>
					<Login />
				</Route>
        {/* <AuthRoute path='/register' component={Register} /> */}
      </Router>
    </AuthProvider>
	)
}
