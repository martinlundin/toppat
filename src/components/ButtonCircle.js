import React from 'react'

export default function ButtonCircle(props) {
  return (
    <span className="button-circle" {...props}>
      {props.children}
    </span>
  )
}
