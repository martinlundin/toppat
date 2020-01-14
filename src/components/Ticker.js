import React from 'react'
import ButtonCircle from './ButtonCircle'
import Count from './Count'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { store } from './../store'


export default function Ticker(props) {
  let global = React.useContext(store)
  let { dispatch } = global

  const count = global.state.tickers[props.ticker]

  function decrement(){
    if(count > 0){
      const newCount = count-1
      dispatch({ type: 'setTickerCount', ticker: props.ticker, count: newCount})
    }
  }
  function increment(){
    const newCount = count+1    
    dispatch({ type: 'setTickerCount', ticker: props.ticker, count: newCount})
  }
  return (
    <div className="ticker">
      <ButtonCircle onClick={decrement}>
        <AiOutlineMinus/>
      </ButtonCircle>
      <Count count={count}/>
      <ButtonCircle onClick={increment}>
        <AiOutlinePlus/>
      </ButtonCircle>
    </div>
  )
}
