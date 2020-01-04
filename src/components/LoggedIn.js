import React from 'react'
import { store } from './../store'
import TickerRow from './TickerRow'

export default function LoggedIn() {
  const global = React.useContext(store)

  return (
    <div>
      Welcome {global.state.username}
      <TickerRow text="7A" />
    </div>
  )
}
