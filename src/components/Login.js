import React from 'react'
import { store } from './../store'

export default function Login() {
  const [usernameInput, setUsernameInput] = React.useState('')
  const global = React.useContext(store)
  const { dispatch } = global

  return (
    <div className="login-screen">
      <input type="text" placeholder="Namn" value={usernameInput} onChange={(e) => {setUsernameInput(e.target.value)}}/>
      <br/>
      <button type="submit" onClick={() => { dispatch({type: 'login', username: usernameInput})} }>Nästa</button>
    </div>
  )
}
