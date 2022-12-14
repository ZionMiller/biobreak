import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
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
  const [currentUser, setCurrentUser] = useState(null)
  const updateUser = (user) => setCurrentUser(user)
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [errors, setErrors] = useState([]);
  const [watchlists, setWatchlist] = useState([])

  const [query, setQuery] = useState("")
  const [returnedQuery, setReturnedQuery] = useState([])
  const [cashAndExpenses, setCashAndExpenses] = useState([])

  // state for search to bio_stocks controller
  const navigate = useNavigate()
  const params = useParams()

  console.log("query", query)
  console.log("error", errors)

  useEffect(() => {
    fetch("/me")
    .then((r) => r.json())
    .then((person) => setCurrentUser(person));

    fetch("/watchlists")
    .then((r) => r.json())
    .then((watchlists) => setWatchlist(watchlists));

    switch(useParams) {
      case 'stocks':
      default:
    }
  }, [])

  const handleChange = (e) => {
    setQuery(e.target.value)
  }


  function search() {
    fetch(`/search/${query}`)
    .then((r) => {
      if(r.ok){
        r.json().then((returnedQuery) => setReturnedQuery(returnedQuery));
      } else {
        r.json().then(json => setErrors(json.errors))
      }
    })
    
  }

  function onCashExClick() {
    fetch(`/stocks/${query}`)
    .then((r) => r.json())
    .then((stonks) => setCashAndExpenses(stonks));
  }

  console.log("returned Query", returnedQuery)
  
  const handleLogOut = () => {
      fetch('/logout', {
          method: "DELETE"
      })
      updateUser("");
      navigate('/login')
  }

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

    function addWatchlist(e) {
    e.preventDefault();
      
    fetch('/watchlist', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      // body: JSON.stringify( {tickers: [`${returnedQuery[0].ticker}`] } ),
      body: JSON.stringify( {tickers: `${returnedQuery[0].ticker}` } ),
    }).then((r) => {
      if (r.ok) {
        r.json().then((symbols) => setWatchlist(symbols));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
   }    

  return (
    <div class="content" style={{minHeight: "100%"}}>
        <div class="content-inside" style={{ padding: "5px", paddingBottom: "10px"}}>
        <NavBar 
          currentUser={currentUser} 
          updateUser={updateUser} 
          handleDarkModeClick={handleDarkModeClick}
        />
        <Routes>
            <Route path='/about' element={
              <About />
            }/>
            <Route path='snapshot' element={
              <Snapshot handleChange={handleChange}
                onCashExClick={onCashExClick}
                currentUser={currentUser}
                returnedQuery={returnedQuery}
                search={search}
                query={query}
                setQuery={setQuery}
                errors={errors}
                addWatchlist={addWatchlist}
                watchlist={watchlists}
                />
            }>
                <Route path='chart' element={
                  <Chart              
                    query={query}
                  />
                }/>      
                <Route path='/snapshot/news' element={
                  <News  
                  returnedQuery={returnedQuery}
                  query={query}
                  setQuery={setQuery}
                  />
                }/>
                <Route path='/snapshot/ownership' element={
                  <Ownership 
                  returnedQuery={returnedQuery}
                  query={query}
                  setQuery={setQuery} 
                  />
                }/>
                <Route path='/snapshot/my-notes' element={
                  <MyNotes 
                  returnedQuery={returnedQuery}
                  query={query}
                  setQuery={setQuery}
                    />
                }/>
                <Route path='/snapshot/cash' element={
                  <Cash 
                  onCashExClick={onCashExClick}
                  returnedQuery={returnedQuery}
                  query={query}
                  setQuery={setQuery}
                    />
                }/>    
                <Route path='/snapshot/expenses' element={
                  <Expenses 
                    onCashExClick={onCashExClick}
                    returnedQuery={returnedQuery}
                    query={query}
                    setQuery={setQuery}
                    />
                }/>
                <Route path='/snapshot/pipeline' element={
                    <Pipeline 
                      returnedQuery={returnedQuery}
                    />
                }/>
            </Route>       
            <Route path='/calendar' element={
              <CatalystCalendar />
            }/>
            <Route path='/watchlist' element={
              <Watchlist currentUser={currentUser}/>
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
            </div>
        <LoggedInFooter class="footer" />
      </div>
  );
}

export default App;