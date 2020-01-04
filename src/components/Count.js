import React from 'react'
import AnimateOnChange from 'react-animate-on-change'

export default function Count(props) {
  return (
    <AnimateOnChange
      baseClassName="ticker-count"
      animationClassName="count--bounce"
      animate={props.diff !== 0 && props.count !== 0}>
          {props.count}
    </AnimateOnChange>
  )
}
