import React from 'react'
import './Button.css'

function Button({txt,func}) {
  return (
    <div>
        <button onClick={func} className='Addbtn' >{txt}</button>
    </div>
  )
}

export default Button