import { React,useState } from "react";
function TodoHook() {
    let initialTodo;
    if(localStorage.getItem("todos")===null)
    {
        initialTodo=[]
    }
    else{
        initialTodo=JSON.parse(localStorage.getItem("todos"))
    }


    const [Alltodo, setAllTodo] = useState(initialTodo)
    const [CurrValue, setCurrValue] = useState('');
    
    let addTodo=(newTodo)=>{
        if(newTodo!="")
        {
            setAllTodo([...Alltodo,newTodo]);
            setCurrValue("");
            
        }
        else{
            alert("You can't Enter the Empty Todo")
        }

       
    }
    let DeleteTodo=(index)=>{
        Alltodo.splice(index,1);
        setAllTodo([...Alltodo]);
    }
    let DeleteAll=()=>{
        setAllTodo([]);
    }
    

return [addTodo,DeleteTodo,Alltodo,setCurrValue,CurrValue,DeleteAll]
  
}

export default TodoHook