import React,{useState,useEffect} from 'react'
import TodoHook from '../../Hooks/TodoHook';
import Button from '../Button/Button';
import Input from '../Input/Input';
import List from '../List/List';
import './AppScreen.css'
function AppScreen() {
  {console.log('appscreen');}
  const[add,del,Alltodos]=TodoHook();
  const [CurrValue, setCurrValue] = useState('');

    let InputOnChange=(val)=>{
        // console.log(val);
        setCurrValue(val);
    }
    // useEffect(() => {
    //   let data=JSON.parse(localStorage.getItem("todos"))
    //   if(data)
    //   {
        
    //   }
    //     localStorage.setItem("todos",JSON.stringify(Alltodos))
    //     console.log('useEffect');
    // }, [])
    


  return (
    <div className='main'>
        <Input typ={"text"} plchl={"Enter Your Todo"} onchng={InputOnChange}/>
        <Button txt={"Add"} func={()=>add(CurrValue)}/>
        <List todoList={Alltodos} delTodo={del}/>
        
    </div>
  )
}

export default AppScreen