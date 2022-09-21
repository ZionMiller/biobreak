import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar"
import Snapshot from "./Snapshot"
import Calendar from "./Calendar"
import Watchlist from "./Watchlist"
import Login from "./Login"
import Signup from "./Signup"

function App() {
  const [currentUser, setCurrentUser] = useState("")
  const updateUser = (user) => setCurrentUser(user)

  const [stocks, setStocks] = useState([])

  useEffect(() => {
    fetch('/hello')
    .then(res => res.json())
    .then(data => {setStocks(data)})
  }, []);

  // useEffect(() => {
  //   fetch("/me")
  //     .then((r) => r.json())
  //     .then((person) => setCurrentUser(person));
  // }, []);

  return (
      <div className="App">
        <NavBar />
          <Switch>
            <Route path='/snapshot'>
              <Snapshot />
            </Route>
            <Route path='/calendar'>
              <Calendar />
            </Route>
            <Route path='/watchlist'>
              <Watchlist />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
          </Switch>
      </div>
  );
}

export default App;