import React from 'react'
import './Item.css'
function Item({singleTodo,i,delFunc}) {
  return (
    <div className='ItemContainer'>
        <p>Task#{i+1}</p>
        <div className='todoitem'>
        <h5>{singleTodo}
        <button className='delbtn' onClick={()=>delFunc(i)}>Delete</button>
        </h5>
        <hr/>
        </div>
    </div>
  )
}

export default Item