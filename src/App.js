import React, { useEffect, useState } from 'react';
import './App.css';

function App() {  
  const [user, setUser] = useState(null);
  // handle async with useEffect
  useEffect(() => {
    // run when app.js componenet loads, run once only    
    fetch("https://randomuser.me/api/").then(async(response) => {
      //console.log(await result.json());
      const user = await response.json();
      setUser(user.results[0]);
    })
        
  }, [])  
  return (
    <div>
      <h1>Welcome</h1>
      <h2>Raondom person generated is</h2>
      <h3>Name is : {user?.name?.first} {user?.name?.last}</h3>
    </div>
  );
}

export default App;
