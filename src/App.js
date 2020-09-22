import React, { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter as  Router, Switch, Route, Link} from 'react-router-dom';

function App() {  
  const [user, setUser] = useState(null);
  // handle async with useEffect
  useEffect(() => {
    // run when app.js componenet loads, run once only    
    fetch("https://randomuser.me/api/").then(async(response) => {
      //console.log(await result.json());
      const user = await response.json();
      //setUser(user.results[0]);
    })
        
  }, [])  
  return (
    <div>
      <h1>Hello World</h1>
      <h2>Raondom person generated is</h2>
      <h3>Name is : {user?.name?.first} {user?.name?.last}</h3>

      <button onClick={() => setUser({
        name : 'william',
        purchased:true, })}>Fake login</button>
      <button onClick={() => setUser(null)}>Fake logout</button>
      <Router>
      <div>
        <nav>
          <ul>

            {user && (
              <li>
              <Link to="/">Home</Link>
            </li>
            )}
            
            {user && (
              <li>
              <Link to="/about">About</Link>
            </li>
            )}
            {user && (
            <li>
              <Link to="/users">Users</Link>
            </li>
            )}
            {user?.purchased && (
            <li>
              <Link to="/secret">Secret</Link>
            </li>
            )}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          <Route path="/about">
            <h1>About</h1>
          </Route>
          {user && (
            <Route path="/users">
              <h1>User</h1>
            </Route>
          )}
          {user?.purchased && (
            <Route path="/secret">
            <h1>Secret shit</h1>
          </Route>
          )}
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
