import React from 'react'
import { Menu, Input, Button, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Snapshot = ({searchedTicker, ticker, setTicker, addWatchlist}) => {

  return (
    <div>
      <Menu pointing>
        <Menu.Menu style={{padding: "5px"}}>
          <Form position='left' onSubmit={searchedTicker}>
          <Input action='Search' 
              placeholder={ticker ? `${ticker}` : "Search..."}
              style={{width: "115px"}}
              value={ticker}
              onChange={(e) => setTicker(e.target.value)}
              />
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
          {ticker ? `Add to ${ticker.toUpperCase()} Watchlist` : "Add to Watchlist"}
        </Button>

    </Menu>

  </div>
  )
}

export default Snapshot
