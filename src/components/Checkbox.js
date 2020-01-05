import React from 'react'

export default function Checkbox(prop) {
  return (
    <div className="checkbox" data-checked={prop.checked}>
      <label htmlFor={prop.name}>{prop.name}</label>
      <input type="checkbox" id={prop.name} checked={prop.checked} onChange={prop.onChange}/>
    </div>
  )
}
