import React from 'react'
import { store } from './../store'

export default function Header() {
  const global = React.useContext(store)
  const { dispatch } = global

  return (
    <header id="header">
      <span>
        Toppat
      </span>
      <span>
        {
          global.state.username
          ?
          <span onClick={() => { dispatch({type: 'logout'})} }>Logout</span>
          :
          null
        }
      </span>
    </header>
  )
}