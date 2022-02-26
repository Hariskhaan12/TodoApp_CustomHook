import React from 'react'


function Input({typ,plchl,onchng,val,stle}) {
  return (
    <div>
        <input type={typ} placeholder={plchl} onChange={(e)=>onchng(e.target.value)} value={val} style={stle}></input>
    </div>
  )
}

export default Input