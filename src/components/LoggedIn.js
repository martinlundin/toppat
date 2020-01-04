import React from 'react'
import { store } from './../store'
import TickerRow from './TickerRow'
import Header from './Header'

export default function LoggedIn() {
  const global = React.useContext(store)

  return (
    <div>
      <Header/>
      <TickerRow text="7A" />
    </div>
  )
}
