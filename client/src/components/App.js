import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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
  const [currentUser, setCurrentUser] = useState([])
  const updateUser = (user) => setCurrentUser(user)
  const [isDarkMode, setIsDarkMode] = useState(false);
  // const [searchQuery, setSearchQuery] = useState("")
  const [errors, setErrors] = useState([]);

  const [formInput, setFormInput] = useState("")
  const [watchlists, setWatchlist] = useState([])

  const [query, setQuery] = useState("")
  const [returnedQuery, setReturnedQuery] = useState("")

  const navigate = useNavigate()

  // setTicker(ticker.toUpperCase())

  useEffect(() => {
    fetch("/watchlists")
    .then((r) => r.json())
    .then((watchlists) => setWatchlist(watchlists));
  }, []);

  console.log(query)

  useEffect(() => {
    fetch("/me")
    .then((r) => r.json())
    .then((person) => setCurrentUser(person));
  }, []);

  // redirect user to home page after logging out etc
  useEffect(() => {
    currentUser.length === 0 ? navigate("/login") : navigate("/profile") 
  }, [currentUser])

  // const goToProfile = ( ) => useNavigate("/profile");
  // const goToLogin = ( ) => useNavigate("/login");
  
  const handleLogOut = () => {
      fetch('/logout', {
          method: "DELETE"
      })
      updateUser("")
  }

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function name(params) {
    // this function will update state of query for all child components

  }

  // Post ticker instance to array
  console.log("watchlists", watchlists)

  console.log("input", formInput)

    function addWatchlist(e) {
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

  return (
      <div>
        <NavBar 
          currentUser={currentUser} 
          updateUser={updateUser} 
          handleDarkModeClick={handleDarkModeClick}
        />

        <Routes>

            <Route path='/about' element={
              <About />
            }/>

            <Route path='/snapshot' element={
              <Snapshot
                setReturnedQuery={setReturnedQuery}
                addWatchlist={addWatchlist}
                setFormInput={setFormInput}
                formInput={formInput}
                />
            }>

                <Route path='/snapshot/chart' element={
                  <Chart              

                  />
                }/>
                
                <Route path='/snapshot/news' element={
                  <News            
                    />

                }/>

                <Route path='/snapshot/ownership' elemment={
                  <Ownership             
                  />
                }/>

                <Route path='/snapshot/my-notes' element={
                  <MyNotes 
                  query={query}
                  setQuery={setQuery}
                    />
                }/>

                <Route path='/snapshot/cash' element={
                  <Cash 
                  query={query}
                  setQuery={setQuery}
                    />
                }/>
      
                <Route path='/snapshot/expenses' element={
                  <Expenses 
                    query={query}
                    setQuery={setQuery}
                    />
                }/>

                <Route path='/snapshot/pipeline' element={
                  <Pipeline 
                  query={query}
                  setQuery={setQuery}
                    />
                }/>

            </Route>
        

            <Route path='/calendar' element={
              <CatalystCalendar />
            }/>

            <Route path='/watchlists' element={
              <Watchlist />
            }/>

            <Route path='/resources' element={
              <Resources />
            }/>

            <Route path='/profile' element={
              <Profile handleLogOut={handleLogOut} currentUser={currentUser}/>
            }/>

            <Route path='/login' element={
              <Login updateUser={updateUser}/>
            }/>

            <Route path='/signup' element={
              <Signup updateUser={updateUser}/>
            }/>
          
            </Routes>
            <LoggedInFooter />
        </div>
  );
}

export default App;