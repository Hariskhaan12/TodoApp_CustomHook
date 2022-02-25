import React from 'react'
import './Input.css'

function Input({typ,plchl,onchng}) {
  return (
    <div>
        <input type={typ} placeholder={plchl} onChange={(e)=>onchng(e.target.value)} className='input'></input>
    </div>
  )
}

export default Input