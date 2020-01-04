import React from 'react'
import ButtonCircle from './ButtonCircle'
import Count from './Count'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

export default function Ticker() {
  const [count, setCount] = React.useState(0)

  function decrement(){
    if(count > 0){
      setCount(count-1)
    }
  }
  function increment(){
    setCount(count+1)
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
