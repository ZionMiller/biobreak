import React from 'react'
import { Menu, Input, Button, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Snapshot = ({ query, setQuery, search, searchedTicker, addWatchlist, setFormInput, formInput}) => {


  function search() {
    fetch(`/search/${query}`)
    .then((r) => r.json())
    .then((returnedQuery) => setReturnedQuery(returnedQuery));
  }


  
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
              <Button type='submit' onClick={search}>Submit</Button>
          </Form>
        </Menu.Menu>

          {/* <Label as='a' content='Market Cap:' style={{width: "100px"}} color='blue'/>
          <Label as='a' content='Cash:' style={{width: "100px"}} color='blue'/>
          <Label as='a' content='Burn:' style={{width: "100px"}} color='blue'/>
          <Label as='a' content='Debt:' style={{width: "100px"}} color='blue'/>
        <Label as='a' content='Catalyst:' style={{width: "100px"}} color='blue'/> */}

        <Menu.Item position='right' name='Chart'>
          <Link to='/snapshot/chart'>Chart</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/snapshot/news'>News</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/snapshot/Ownership'>Ownership</Link>
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

        <Button style={{backgroundColor: "#FFB52E"}}
          onClick={addWatchlist}
        >
          {query ? `Add to ${query.toUpperCase()} Watchlist` : "Add to Watchlist"}
        </Button>

    </Menu>

  </div>
  )
}

export default Snapshot
