import React from 'react'
import TickerRow from './TickerRow'
import Header from './Header'
import { store } from './../store'
import Checkbox from './Checkbox'
import ButtonCircle from './ButtonCircle'
import { AiOutlineEdit } from 'react-icons/ai'

import { getTickerCount } from './../firebase'

export default function LoggedIn() {
  let global = React.useContext(store)
  let { dispatch } = global

  let [edit, setEdit] = React.useState(false)
  
  const handleCheckboxChange = (name, checked) => {
    let newTickers = global.state.showableTickers.map((ticker) => (ticker.name === name ? {...ticker, checked: !checked} : ticker))
    dispatch({ type: 'setShowableTickers', showableTickers: newTickers })
  }

  React.useEffect(() => {
    global.state.showableTickers.map((ticker) => {
      if(ticker.checked) {
        getTickerCount(global.state.username, ticker.name).then((count) => {
          dispatch({type: 'setLocalTickerCount', ticker: ticker.name, count})
        })
      }
    })
  }, [dispatch, global.state.showableTickers, global.state.username])
  
  return (
    <div>
      <Header/>
      <div className="edit-wrap">
        <div className="edit-indicator">
          <ButtonCircle onClick={() => {setEdit(!edit)}}>
            <AiOutlineEdit />
          </ButtonCircle>
        </div>
        {
          edit === true
            ? 
              (
                <div className="edit-visible-tickers">
                  {global.state.showableTickers.map((ticker) => {
                    return (
                      <Checkbox key={ticker.name} {...ticker} onChange={() => { handleCheckboxChange(ticker.name, ticker.checked) }}/>
                    )
                  })}
                </div>
              )
            :
              null
        }
      </div>

      <div className="tickers-wrap">
        {
          global.state.showableTickers.map((ticker) => {
            if(ticker.checked) return <TickerRow key={ticker.name} text={ticker.name} />
          })
        }
      </div>
    </div>
  )
}
