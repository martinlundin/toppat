import React from 'react'
import { store } from './../store'
import ButtonCircle from './ButtonCircle'
import { AiOutlineEdit } from 'react-icons/ai'

export default function Header(props) {
  const global = React.useContext(store)
  const { dispatch } = global

  return (
    <header>
      <span>
        {global.state.username}
      </span>
      <span>
        {
          global.state.username
          ?
          <div className="header-edit-wrap">
            <div className="edit-indicator">
              <ButtonCircle onClick={() => {props.setEdit(!props.edit)}}>
                <AiOutlineEdit />
              </ButtonCircle>
            </div>
            <button className="logout-button" onClick={() => { dispatch({type: 'logout'})} }>Logout</button>
          </div>
          :
          null
        }
      </span>
    </header>
  )
}
