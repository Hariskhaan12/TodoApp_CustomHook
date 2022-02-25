import React from 'react'
import Item from '../Item/Item'
import './list.css'
function List({todoList,delTodo}) {
  return (
    <div className='ListContainer'>
      {todoList==0?'No Todos to display':(
        <>
        {todoList.map((val,index)=>{
          return(
          <>
            <Item singleTodo={val} i={index} delFunc={delTodo}/>
          </>
 
          )})}
          </>
          )}
    </div>
  )
}

export default List