import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import NavBar from "./NavBar"
import Snapshot from "./Snapshot"
import CatalystCalendar from "./CatalystCalendar"
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
import LoggedInFooter from "./LoggedInFooter";

function App() {
  const [currentUser, setCurrentUser] = useState("")
  const updateUser = (user) => setCurrentUser(user)
  const [isDarkMode, setIsDarkMode] = useState(false);
  // const [searchQuery, setSearchQuery] = useState("")
  const [errors, setErrors] = useState([]);

  const [formInput, setFormInput] = useState("")
  const [watchlists, setWatchlist] = useState([])

  // setTicker(ticker.toUpperCase())
  const history = useHistory()
  
  useEffect(() => {
    fetch("/watchlists")
    .then((r) => r.json())
    .then((watchlists) => setWatchlist(watchlists));
  }, []);

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

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  // Post ticker instance to db
  console.log("watchlists", watchlists)

  console.log("input", formInput)

    function searchedTicker(e) {
    e.preventDefault();
      
    fetch('/watchlist', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({tickers: formInput}),
    }).then((r) => {
      if (r.ok) {
        r.json().then((watchlists) => setWatchlist(watchlists));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
   }    
   

  function addWatchlist(params) {
    
  }

  return (
      <div className="App">
        <NavBar currentUser={currentUser} 
          updateUser={updateUser} 
          handleDarkModeClick={handleDarkModeClick}
          />
          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route exact path='/snapshot'>
              <Snapshot searchedTicker={searchedTicker} 
                addWatchlist={addWatchlist}
                setFormInput={setFormInput}
                formInput={formInput}
                />
            </Route>
            <Route path='/snapshot/chart'>
              <Chart 
                searchedTicker={searchedTicker} 
              />
            </Route>
            <Route path='/snapshot/news'>
              <News searchedTicker={searchedTicker} 
                />
            </Route>
            <Route path='/snapshot/ownership'>
              <Ownership searchedTicker={searchedTicker} 
                />
            </Route>
            <Route path='/snapshot/my-notes'>
              <MyNotes searchedTicker={searchedTicker} 
                />
            </Route>
            <Route path='/snapshot/cash'>
              <Cash searchedTicker={searchedTicker} 
                />
            </Route>
            <Route path='/snapshot/expenses'>
              <Expenses searchedTicker={searchedTicker} 
                />
            </Route>
            <Route path='/snapshot/pipeline'>
              <Pipeline searchedTicker={searchedTicker} 
                />
            </Route>
            <Route path='/calendar'>
              <CatalystCalendar />
            </Route>
            <Route path='/watchlists'>
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
        <LoggedInFooter />
      </div>
  );
}

export default App;