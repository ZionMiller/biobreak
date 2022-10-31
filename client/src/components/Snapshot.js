import React, { useState } from 'react'
import { Menu, Label, Button, Form } from 'semantic-ui-react'
import { Link, Outlet } from 'react-router-dom'

const Snapshot = ({ onCashExClick, query, setQuery, addWatchlist, search, returnedQuery, watchlist, currentUser}) => {
  
  const handleCashAndSearch = () => {
    search()
    onCashExClick()
    setQuery('')
  }



  return (
    <div>
      <Menu pointing>
        <Menu.Menu style={{padding: "5px"}}>
          <Form position='left' >
          <input type='text'
              placeholder="Search..."
              style={{width: "115px"}}
              value={query}
              onChange={((e) => setQuery(e.target.value))}
              />
              <Button style={{backgroundColor: "#FFB52E"}} type='submit' onClick={handleCashAndSearch}>Search</Button>
          </Form>
        </Menu.Menu>

        {returnedQuery.length == 0 ? 
          <Label as='a' tag style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "#FFB52E",
          }}>
            search by ticker here
          </Label>
          :         
          <Label as='a' tag style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "#29b6f6",
          }}>
            currently viewing {returnedQuery[0].ticker} 
          </Label>
        }          

        <Menu.Item position='right' name='Chart'>
          <Link to='/snapshot/chart'>Chart</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/snapshot/news'>News</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/snapshot/ownership'>Ownership</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/snapshot/my-notes'>My Notes</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/snapshot/cash'>Cash</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/snapshot/expenses'>Expenses</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/snapshot/pipeline'>Pipeline</Link>
        </Menu.Item>

        {/* {
        currentUser.tickers.includes(`${returnedQuery[0].ticker}`) ?
          <Button style={{backgroundColor: "#29b6f6"}}>
            {`${query.toUpperCase()} Is on Watchlist`}
          </Button>
        : 
          <Button style={{backgroundColor: "#FFB52E"}} onClick={addWatchlist}>
            {query ? `Add to ${query.toUpperCase()} Watchlist` : "Add to Watchlist"}
          </Button>
        } */}

        {/* {console.log(currentUser.watchlists.includes(returnedQuery.map((returned) => {
          returned.ticker
        })))} */}

    
        <Button style={{backgroundColor: "#FFB52E"}} onClick={addWatchlist}>
            {returnedQuery.length > 0 ? `Add to ${returnedQuery[0].ticker} Watchlist` : "Add to Watchlist"}
        </Button>

    </Menu>
    {/* this enables sub menu */}
    <Outlet />

  </div>
  )
}

export default Snapshot
