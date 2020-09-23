import React, { useEffect, useState } from 'react';
import './App.css';
import Todo from './todo';
import db from './firebase';


function App() {  
const [username,setUsername] = useState("")
const [password,setPassword] = useState("")
const login = () => {
  console.log('login dedail')
  console.log(username)
  console.log(password)
}
  return (
    <div className="App">         
    <input 
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      type="text"
      placeholder="insert your username" 
    />
    <input 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      type="password"
      placeholder="insert your password" 
    />

    <button onClick={login}>Login</button>
    <button>Register</button>

    </div>
  )
}

export default App;
