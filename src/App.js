import React, { useState, useEffect } from 'react';

import './App.css';
import Form from './components/Form'
import ToDoList from './components/ToDoList'
import { getTasks } from './data/tasks'



function App() {
  

    const [taskHolder, setTaskHolder] = useState([])
    const [isCompleted, setIsCompleted] = useState("All")
    const [psHolder, setPsHolder] = useState("All")
    
    useEffect(()=>{

    }, )
  
  
  
  
  
  return (
    <div className="App">
      <div className="d-flex flex-column align-items-center">
        <header className="mt-8">
          <h1 > To Do: </h1>
        </header>
        <Form taskHolder={taskHolder} setTaskHolder={setTaskHolder} isCompleted={isCompleted} setIsCompleted={setIsCompleted}/>
      </div>
      <ToDoList taskHolder={taskHolder} setTaskHolder={setTaskHolder} isCompleted={isCompleted} psHolder={psHolder} setPsHolder={setPsHolder}/>
        
    </div>
  );
}

export default App;
