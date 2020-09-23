import React, { useEffect, useState } from 'react';
import './App.css';
import Todo from './todo';
import {db, auth} from './firebase';


function App() {  
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [user, setUser] = useState(null)
const [error, setError] = useState("");

const login = () => {  
  auth.signInWithEmailAndPassword(username, password)
  .then(user => {        
  }).catch(error =>{
    setError(error)
  });
}

const register = () =>{
  console.log('register')
  auth.createUserWithEmailAndPassword(username, password).then(user => {    
  }).catch(error => {
    setError(error) 
  })
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
    <button onClick={register}>Register</button>
    {error && <p>{error.message}</p>}
    </div>
  )
}

export default App;
