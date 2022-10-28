import React from 'react'
import { Menu, Checkbox, Icon } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom'
import { TickerTape, Ticker } from "react-tradingview-embed";

const NavBar = ({currentUser, handleDarkModeClick}) => {

  return (
    <div style={{margin: "0px"}}>
        { currentUser ?
        <Menu className='menu' >
            <Menu.Item>
                <img className="logo-img" style={{ fontSize: "100px", padding: "0px" }} id="logo" src={require("../biobreak_logo.png")} alt="logo"/>
            </Menu.Item>
            {/* <Menu.Item> */}
                {/* <Ticker widgetPropsAny={{  "symbols": [
                                            {
                                            // "description": "DOW",
                                            // "proName": "NYSE:DOW"
                                            "description": "XBI",
                                            "proName": "AMEX:XBI"
                                            }                                   
                                        ], "colorTheme": "light", "isTransparent": true, "autosize": true}} /> */}
                {/* <Ticker widgetPropsAny={{  "symbols": [
                                            {
                                            "description": "NASDAQ",
                                            "proName": "NASDAQ:NDAQ"
                                            },                                  
                                        ], "colorTheme": "light", "isTransparent": true, "autosize": true}} />
                <Ticker widgetPropsAny={{  "symbols": [
                                            {
                                            "description": "",
                                            "proName": "AMEX:SPY"
                                            }                                 
                                        ], "colorTheme": "light", "isTransparent": true, "autosize": true}} />                  */}
            {/* </Menu.Item> */}
            <Menu.Item position='right'>
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
                    <Checkbox toggle onClick={handleDarkModeClick}/>
                </div>
            <i class="moon icon"></i>
            </Menu.Item>
            <Menu.Item style={{margin: "0px"}}>
                <Link to='/profile'><Icon name="user circle" size="big"/></Link>
            </Menu.Item>
        </Menu>
        :
        <Menu className='menu'>
            <Menu.Item>
                <img className="logo-img" style={{ fontSize: "100px", padding: "0px" }} id="logo" src={require("../biobreak_logo.png")} alt="logo"/>
            </Menu.Item>
            <Menu.Item>
                <Link to='/About'>About</Link>
            </Menu.Item>
            <Menu.Item position='right'>
                <Link to="/login">Log In / Signup</Link>
            </Menu.Item>
        </Menu>
        }
        {/* Refactor this with protobuf to Youtube websockets link here: https://www.youtube.com/watch?v=flxxyHeBowI */}
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
                                        ], "colorTheme": "light", "isTransparent": true, "autosize": true}}/> 
    </div>
  )
}

export default NavBar