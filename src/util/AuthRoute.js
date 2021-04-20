import React, { useContext, Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { AuthContext } from './../context/auth'

export default function AuthRoute({ Component: component, ...rest }) {
  const { user } = useContext(AuthContext)
  return (
    <Route
      {...rest}
      render={props =>
        user ? <Redirect to="/login"   /> : <Component {...props} />
      }
    />
		// <Route {...rest} render={() => {
    //   return user
    //     ? children
    //     : <Redirect to='/login' />
    // }} />
  )
}
