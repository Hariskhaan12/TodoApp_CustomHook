import {React,useState} from 'react'
import Button from '../Button/Button'
function Item({singleTodo,i,delFunc}) {
const [Done, setDone] = useState({});
  let style={
    float: "right",
    marginRight: "15px",
    backgroundColor: "red",
    border: 'none',
    padding: "6px",
    color: "wheat",
    fontWeight:"bold",
    borderRadius: "2px",
    position:"relative",
    bottom:"15px"
  }

  // style obect  to create a line over the task when user clicks on it.
  let doneStyle={
    textDecoration: "line-through"
  }

  // to done or undone the task
  let HandleDone=()=>{
    if(Object.keys(Done).length === 0 )
    {
      setDone(doneStyle)
    }
    else{
      setDone({});
    }
  }
  
  return (
    <div style={{textAlign: "left", marginLeft: "10px"}}>
        <p>Task#{i+1}</p>
        <div style={{position:"relative", bottom: "12px"}}>
        <h5 onClick={HandleDone} style={Done}>{singleTodo}
        <Button txt='Delete' func={()=>delFunc(i)} stle={style} />
        </h5>
        <hr/>
        </div>
    </div>
  )
}

export default Item