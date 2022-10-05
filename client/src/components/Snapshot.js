import React, { useState } from 'react'
import { Menu, Label, Button, Form } from 'semantic-ui-react'
import { Link, Outlet } from 'react-router-dom'

const Snapshot = ({ query, setQuery, addWatchlist, search, returnedQuery, watchlist, currentUser}) => {
  
  return (
    <div>
      <Menu pointing>
        <Menu.Menu style={{padding: "5px"}}>
          <Form position='left'>
          <input type='text'
              placeholder={query ? `${query}` : "Search..."}
              style={{width: "115px"}}
              value={query}
              onChange={((e) => setQuery(e.target.value))}
              />
              <Button style={{backgroundColor: "#29b6f6"}} type='submit' onClick={search}>Search</Button>
          </Form>
        </Menu.Menu>

          
          {/* <Label as='a' tag>
            search by ticker here
          </Label>
          <Label as='a' tag>
            {/* currently viewing {returnedQuery[0].ticker} 
          </Label> */}
        

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

        {console.log(currentUser)}
        <Button style={{backgroundColor: "#FFB52E"}} onClick={addWatchlist}>
            {query ? `Add to ${query.toUpperCase()} Watchlist` : "Add to Watchlist"}
        </Button>

    </Menu>
    {/* this enables sub menu */}
    <Outlet />

  </div>
  )
}

export default Snapshot
