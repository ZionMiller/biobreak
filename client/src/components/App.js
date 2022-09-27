import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Routes, useHistory,  useParams} from "react-router-dom";
import NavBar from "./NavBar"
import Snapshot from "./Snapshot"
import Calendar from "./Calendar"
import Watchlist from "./Watchlist"
import Login from "./Login"
import Signup from "./Signup"
import About from "./About";
import Profile from "./Profile";
import Resources from "./Resources";
import Chart from "./Chart";
import News from "./News";
import Ownership from "./Ownership";
import MyNotes from "./MyNotes";
import Expenses from "./Expenses";
import Cash from "./Cash";
import Pipeline from "./Pipeline";

function App() {
  const [currentUser, setCurrentUser] = useState("")
  const updateUser = (user) => setCurrentUser(user)

  const [stocks, setStocks] = useState([])

  const history = useHistory()

  // let { url } = useParams();

  
  // useEffect(() => {
  //   fetch('/hello')
  //   .then(res => res.json())
  //   .then(data => {setStocks(data)})
  // }, []);
  
  useEffect(() => {
    fetch("/me")
    .then((r) => r.json())
    .then((person) => setCurrentUser(person));
  }, []);
  
  const handleLogOut = () => {
      fetch('/logout', {
          method: "DELETE"
      })
      updateUser("")
      history.push('login') // redirect user to home page after logging out
  }

  return (
      <div className="App">
        <NavBar currentUser={currentUser} updateUser={updateUser}/>
          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route exact path='/snapshot'>
              <Snapshot />
            </Route>
            <Route path='/snapshot/chart'>
              <Chart />
            </Route>
            <Route path='/snapshot/news'>
              <News />
            </Route>
            <Route path='/snapshot/ownership'>
              <Ownership />
            </Route>
            <Route path='/snapshot/my-notes'>
              <MyNotes />
            </Route>
            <Route path='/snapshot/cash'>
              <Cash />
            </Route>
            <Route path='/snapshot/expenses'>
              <Expenses />
            </Route>
            <Route path='/snapshot/pipeline'>
              <Pipeline />
            </Route>
            <Route path='/calendar'>
              <Calendar />
            </Route>
            <Route path='/watchlist'>
              <Watchlist />
            </Route>
            <Route path='/resources'>
              <Resources />
            </Route>
            <Route path='/profile'>
              <Profile handleLogOut={handleLogOut} currentUser={currentUser}/>
            </Route>
            <Route path='/login'>
              <Login updateUser={updateUser}/>
            </Route>
            <Route path='/signup'>
              <Signup updateUser={updateUser}/>
            </Route>
          </Switch>
      </div>
  );
}

export default App;