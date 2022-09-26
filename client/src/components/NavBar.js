import React from 'react'
import { Menu, Checkbox, Icon } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom'
import { TickerTape, Ticker } from "react-tradingview-embed";

const NavBar = ({currentUser, updateUser}) => {

// "symbol": "NASDAQ:AAPL"
    const changeTheme = (dark_mode) => {
        if (dark_mode) {

        } else {

        }

    }

  return (
    <div id="navBar">
        { currentUser ?
        <Menu className='menu' >
            <Menu.Item>
                <img className="logo-img" style={{ fontSize: "100px" }} id="logo" src={require("../biobreak_logo.png")} alt="logo"/>
            </Menu.Item>
            <Menu.Item>
            <TickerTape widgetPropsAny={{  "symbols": [
                                        {
                                            "description": "DOW",
                                            "proName": "NYSE:DOW"
                                            },
                                            {
                                            "description": "NASDAQ",
                                            "proName": "NASDAQ:NDAQ"
                                            },
                                            {
                                            "description": "S&P",
                                            "proName": "AMEX:SPY"
                                            }
                                        ], "colorTheme": "light"}} />
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
                <Link to='/profile'><Icon name="user circle" size="big"/></Link>
            </Menu.Item>
        </Menu>
        :
        <Menu className='menu'>
            <Menu.Item>
                <img className="logo-img" style={{ fontSize: "100px" }} id="logo" src={require("../biobreak_logo.png")} alt="logo"/>
            </Menu.Item>
            <Menu.Item>
                <Link to='/About'>About</Link>
            </Menu.Item>
            <Menu.Item position='right'>
                <Link to="/login">Log In</Link>
            </Menu.Item>
            <Menu.Item >
                <Link to="/signup">Sign up</Link>
            </Menu.Item>
        </Menu>
        }
        <Ticker widgetPropsAny={{"symbols": [
                                            {
                                            "description": "XBI",
                                            "proName": "AMEX:XBI"
                                            },
                                            {
                                            "description": "IBB",
                                            "proName": "NASDAQ:IBB"
                                            },
                                            {
                                            "description": "LABU",
                                            "proName": "AMEX:LABU"
                                            },
                                            {
                                            "description": "LABD",
                                            "proName": "AMEX:LABD"
                                            }
                                        ], "colorTheme": "light"}}/> 
    </div>
  )
}

export default NavBar