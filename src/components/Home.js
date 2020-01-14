import React from 'react'
import { store } from './../store.js';

import Login from './Login'
import LoggedIn from './LoggedIn'

export default function Home() {
  const global = React.useContext(store);
  const { dispatch } = global

  React.useEffect(() => {
    let username = localStorage.getItem('username')
    let showableTickers = localStorage.getItem('showableTickers')
    if(username) dispatch({type: 'login', username})
    if(showableTickers) dispatch({type: 'setShowableTickers', showableTickers: JSON.parse(showableTickers)})

  }, [dispatch])

  return (
    <main>
      { 
          global.state.username
          ? 
            <LoggedIn />
          :
            <Login />
        }
    </main>
  )
}
