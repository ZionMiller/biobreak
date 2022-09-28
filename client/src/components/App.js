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
  const [ticker, setTicker] = useState("")
  const [errors, setErrors] = useState([]);
  const [reqObj, setReqObj] = useState("")

  const history = useHistory()

  // useEffect(() => {
  //   fetch("/stocks")
  //   .then((r) => r.json())
  //   .then((stocks) => setStocks(stocks));
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

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  
    function searchedTicker(e, ticker) {
    e.preventDefault();
    // ticker.toUpperCase()
    setReqObj({ticker})
  }
  
  useEffect(() => {
    if (reqObj !== "") {
      fetch('/stocks', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(reqObj),
      }).then((r) => {
        if (r.ok) {
          r.json().then((ticker) => setTicker(ticker));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
     }    
  }, [reqObj])


  console.log(ticker)

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
                ticker={ticker} 
                setTicker={setTicker}
                addWatchlist={addWatchlist}
                />
            </Route>
            <Route path='/snapshot/chart'>
              <Chart 
                searchedTicker={searchedTicker} 
                ticker={ticker} 
                setTicker={setTicker}
              />
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
              <CatalystCalendar />
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
        <LoggedInFooter />
      </div>
  );
}

export default App;