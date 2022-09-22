import React from 'react'
import { Menu, Checkbox } from 'semantic-ui-react';
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

    const changeTheme = (dark_mode) => {
        if (dark_mode) {

        } else {

        }

    }

  return (
    <div id="navBar">
        { currentUser ?
        <Menu className='menu'>
            <Menu.Item>
                <img className="logo" id="logo" src={require("../biobreak_logo.png")} alt="logo"/>
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
                <Link to='/resources'>Resources</Link>
            </Menu.Item>
            <Menu.Item >
            <i class="sun icon"></i>
                <div class="ui fitted toggle checkbox">
                    <Checkbox toggle onClick={changeTheme}/>
                </div>
            <i class="moon icon"></i>
            </Menu.Item>
            <Menu.Item>
                <Link onClick={handleLogOut}>Logout</Link>
            </Menu.Item>
        </Menu>
        :
        <Menu className='menu'>
            <Menu.Item>
                <Link to='/About'>About</Link>
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