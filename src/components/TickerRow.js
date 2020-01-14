import React from 'react'
import Ticker from './Ticker'

export default function TickerRow(props) {
  return (
    <div className="ticker-row">
      <div className="ticker-text">
        <span>{props.text}</span>
      </div>
        <Ticker ticker={props.text}/>
    </div>
  )
}
