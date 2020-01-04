import React from 'react'
import { store } from './../store.js';

import Login from './Login'
import LoggedIn from './LoggedIn'

export default function Home() {
  const global = React.useContext(store);
  const { dispatch } = global

  React.useEffect(() => {
    let username = localStorage.getItem('username')
    if(username) dispatch({type: 'login', username})
    
  }, [dispatch])

  return (
    <div>
      { 
          global.state.username
          ? 
            <LoggedIn />
          :
            <Login />
        }
    </div>
  )
}
