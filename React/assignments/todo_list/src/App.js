import React, { useState } from "react"
import './App.css';

import Todo from "./components/Todo"

function App() {
  const [newTodo, setNewTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleNewTodoSubmit = (event) => {
    event.preventDefault()

    if (newTodo.length === 0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    }

    //setTodos and pass in new array with added todo
    setTodos([...todos, todoItem])
    setNewTodo("")
  }

  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((_todo, i) => {
      return i !== delIdx
    })

    setTodos(filteredTodos)
  }

  const handleToggleComplete = (idx) =>{
    const updatedTodos = todos.map((todo, i) => {
      if (idx === i) {
        todo.complete = !todo.complete

        //To avoid updating the todo directly, do this:
        // const updatedTodo = { ...todo, complete: !todo.complete }
        // return updatedTodo
      }

      return todo
    });

    setTodos(updatedTodos)
  }

  return (
    <div style={{textAlign: "center"}}>
      <form onSubmit={(event) => {
        handleNewTodoSubmit(event)
      }}>
        <input 
        onChange={(event) => {setNewTodo(event.target.value)
        }} 
        type="text"
        value={newTodo}
        />
      <div>
        <button>Add</button>
      </div>
      </form>
      <hr></hr>

      {todos.map((todo, i) => {
          return (
            <Todo 
            key={i}
            i={i}
            todo={todo} 
            handleToggleComplete={handleToggleComplete}
            handleTodoDelete={handleTodoDelete}
            />
          );
        })}
    </div>
  );
}
export default App;
