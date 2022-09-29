import React from 'react'
import { Menu, Input, Button, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Snapshot = ({ searchedTicker, addWatchlist, setFormInput, formInput}) => {
 
  return (
    <div>
      <Menu pointing>
        <Menu.Menu style={{padding: "5px"}}>
          <Form position='left'>
          <input type='text'
              placeholder={formInput ? `${formInput}` : "Search..."}
              style={{width: "115px"}}
              // value={ticker}
              onChange={((e) => setFormInput(e.target.value))}
              />
              <Button type='submit' onClick={searchedTicker}>Submit</Button>
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
          {formInput ? `Add to ${formInput.toUpperCase()} Watchlist` : "Add to Watchlist"}
        </Button>

    </Menu>

  </div>
  )
}

export default Snapshot
