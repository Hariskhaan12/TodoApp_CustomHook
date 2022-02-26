import React from 'react'
import Item from '../Item/Item'

function List({todoList,delTodo}) {
  return (
    <div style={{marginTop: "8px"}}>
      {todoList==0?'No Todos to display':(
        <>
        {todoList.map((val,index)=>{
          return(
            <Item singleTodo={val} i={index} delFunc={delTodo} key={index+10}/>
          )})}
          </>
          )}
    </div>
  )
}

export default List