import React from 'react'
import { store } from './../store'

export default function Login() {
  const [usernameInput, setUsernameInput] = React.useState('')
  const global = React.useContext(store)
  const { dispatch } = global

  return (
    <div>
      <input type="text" placeholder="Namn" value={usernameInput} onChange={(e) => {setUsernameInput(e.target.value)}}/>
      <button type="submit" onClick={() => { dispatch({type: 'login', username: usernameInput})} }>Nästa</button>
    </div>
  )
}
