import React, { useEffect, useState } from 'react';
import './App.css';
import Todo from './todo';


function App() {  

  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  const addTodo = (e) => {
    e.preventDefault()
    //console.log(input)
    // add whatever in input into array
    // clear the input field
    setTodos([...todos, input]);
    setInput('')

    console.log([...todos, input])
  }

  return (
    <div className="App">
      <h1>Todo</h1>

      <form>
        <input type="text" value={input} onChange={e => setInput(e.target.value)}></input>            
        <button onClick={addTodo} type="submit" >add to do</button>
      </form>
      {todos.map((todo, i) =>  <Todo key={i} title={todo} /> )}
      
      
    </div>
  )
}

export default App;
