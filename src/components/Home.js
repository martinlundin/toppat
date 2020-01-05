import React from 'react'
import { store } from './../store.js';

import Login from './Login'
import LoggedIn from './LoggedIn'

export default function Home() {
  const global = React.useContext(store);
  const { dispatch } = global

  React.useEffect(() => {
    let username = localStorage.getItem('username')
    let tickers = localStorage.getItem('tickers')
    if(username) dispatch({type: 'login', username})
    if(tickers) dispatch({type: 'setTickers', tickers: JSON.parse(tickers)})

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
