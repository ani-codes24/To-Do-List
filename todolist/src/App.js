import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [todolist,settodolist]=useState([])
  let saveToDoList=(event)=>{

    let todoname=event.target.todoname.value;

    if(!todolist.includes(todoname)){
      let finaltodo=[...todolist,todoname]
      settodolist(finaltodo)
    }
    else{
      alert("Already Exists!!")
    }
    event.preventDefault();
    
  }
  let list=todolist.map((value, index)=>{
    return(
      <ToDoListItems value={value} key={index} indexNumber={index} todolist={todolist} settodolist={settodolist}/>
    )
  })
  return (
    <div className="App">
      <h1> To-Do List</h1>
      <p>Welcome to ToDo List!!<br/>
        Add Tasks You Want to Do<br/>
        Click on x to Remove a Task<br/>
        Click on Task to Mark it Complete!</p>
      <form onSubmit={saveToDoList}>
        <input type = "text" name='todoname'/> <button>Save</button>
      </form>
      <div className='outerDiv'>
        <ul>
            {list}
        </ul>
      </div>
    </div>
  );
}

export default App;
function ToDoListItems({value,indexNumber,todolist,settodolist}){
  let [status,setStatus]=useState(false)
    let deleteRow=()=>{
      let finalData=todolist.filter((v,i)=>i!=indexNumber)
      settodolist(finalData)
    }
    let checkStatus=()=>{
      setStatus(!status)
    }
  return(
    <li className={(status)? 'completetodo': ''} onClick={checkStatus}>{indexNumber+1}. {value}<span onClick={deleteRow}>&times;</span></li>
  )
}