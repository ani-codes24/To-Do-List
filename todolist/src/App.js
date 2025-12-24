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
      <ToDoListItems/>
    )
  })
  return (
    <div className="App">
      <h1> To-Do List</h1>
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
function ToDoListItems(){
  return(
    <li>JavaScript <span>&times;</span></li>
  )
}