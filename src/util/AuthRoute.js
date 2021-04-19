import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { AuthContext } from './../context/auth'

export default function AuthRoute({ children, ...rest }) {
  const { user } = useContext(AuthContext)
	console.log(user)
  return (
    // <Route
    //   {...rest}
    //   render={props =>
    //     user ? <Redirect to="/login"   /> : <Component {...props} />
    //   }
    // />

		<Route {...rest} render={() => {
      return user
        ? children
        : <Redirect to='/login' />
    }} />
  )
}
