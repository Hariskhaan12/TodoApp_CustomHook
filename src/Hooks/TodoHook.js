import { React,useState } from "react";
function TodoHook() {
    console.log('todoHook');
    const [Alltodo, setAllTodo] = useState([])

    let addTodo=(newTodo)=>{
        setAllTodo([...Alltodo,newTodo]);
        
    }
    localStorage.setItem("todos",JSON.stringify(Alltodo))
    let DeleteTodo=(index)=>{
        Alltodo.splice(index,1);
        setAllTodo([...Alltodo]);
        // console.log(Alltodo);
    }


return [addTodo,DeleteTodo,Alltodo]
  
}

export default TodoHook