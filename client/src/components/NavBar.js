import React from 'react'
import { Menu } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom'

const NavBar = ({currentUser, updateUser}) => {

    const history = useHistory()
    const handleLogOut = () => {
        fetch('/logout', {
            method: "DELETE"
        })
        updateUser("")
        history.push('login') // redirect user to home page after logging out
    }

  return (
    <div id="navBar">
        { currentUser ?
        <Menu className='menu'>
            <Menu.Item>
                <Link to='/landing-page'>Landing Page</Link>
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
            <Menu.Item>
                <Link onClick={handleLogOut}>Logout</Link>
            </Menu.Item>
        </Menu>
        :
        <Menu className='menu'>
            <Menu.Item>
                <Link to="/">Landing Page</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/login">Log In</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/signup">Sign up</Link>
            </Menu.Item>
        </Menu>
        }
    </div>
  )
}

export default NavBar