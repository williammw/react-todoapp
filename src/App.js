import React, { useEffect } from 'react';
import './App.css';

function App() {

  // handle async with useEffect
  useEffect(() => {
    // run when app.js componenet loads, run once only
    const fetchData = async() => {
      await fetch("https://randomuser.me/api/").then(async (result) => {
        console.log(await result.json());
      })
    }
    fetchData();
  }, [])

  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
}

export default App;
