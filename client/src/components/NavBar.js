import React from 'react'
import { Menu } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom'



const NavBar = () => {
  return (
    <div id="navBar">
        <Menu className='menu'>
            <Menu.Item>
                <Link to='/'>Landing Page</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/snapshot'>Snapshot</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/calendar'>Calendar</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/watchlist'>Watchlist</Link>
            </Menu.Item>
        </Menu>
    </div>
  )
}

export default NavBar