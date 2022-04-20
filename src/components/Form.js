import React, { useState } from 'react'

const Form = ({taskHolder, setTaskHolder, setIsCompleted, isCompleted}) => {
    const [ inputText, setInputText] = useState("");

   
    
    const submitToDoHolder=(e)=> {
        e.preventDefault();
        setTaskHolder([
            ...taskHolder, {title: inputText, _id:taskHolder.length+1, completed: false}
        ]);
        
        console.log(taskHolder)
        console.log(isCompleted)
        setInputText("");
    }

    const isCompletedHandler = (e)=>{
        
        switch (e.target.value) {
            case "completed":
                setIsCompleted(true)
                break;
            case "incomplete":
                setIsCompleted(false)
                break;       
            case "all":
                setIsCompleted(null)
                break;
            default:
                break;
        }
    }
    

  return (
       <form >
            <input onChange={e=>setInputText(e.target.value)} value={inputText} type="text" className="todo-input" />
            <button onClick={submitToDoHolder} className=" btn btn-dark todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={isCompletedHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </div>
        </form>
  )
}

export default Form;