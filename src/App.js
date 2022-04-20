import React, { useState } from 'react';

import './App.css';
import Form from './components/Form'
import ToDoList from './components/ToDoList'




function App() {
  

    const [taskHolder, setTaskHolder] = useState([])
    const [isCompleted, setIsCompleted] = useState(null)
      
  
  
  return (
    <div className="App">
      <div className="d-flex flex-column align-items-center">
        <header className="mt-8">
          <h1 > To Do: </h1>
        </header>
        <Form taskHolder={taskHolder} setTaskHolder={setTaskHolder} setIsCompleted={setIsCompleted}/>
      </div>
      <ToDoList taskHolder={taskHolder} setTaskHolder={setTaskHolder} isCompleted={isCompleted}/>
        
    </div>
  );
}

export default App;
