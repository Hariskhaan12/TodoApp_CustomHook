import React from 'react'

function Button({txt,func,stle}) {
  return (
    <div>
        <button onClick={func} style={stle} >{txt}</button>
    </div>
  )
}

export default Button