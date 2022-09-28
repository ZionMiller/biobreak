import React from 'react'
import { Table, Icon } from 'semantic-ui-react'


const LoggedInFooter = () => {
  return (
    <div style=
        {{
        position: "absolute",
        bottom: "0",
        width: "100%",
        height: "200px",
        }}>
            
        <Table  style={{backgroundColor: "#E2E5DE", textAlign: "center"}}>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
            {/* <img className="logo-img" style={{ size: "10px", padding: "0px" }} id="logo" src={require("../biobreak_icon.png")} alt="logo"/> */}
            <h1>Icon loggo will go here</h1>
            </Table.Cell>
            <Table.Cell>
              <h2>Policies</h2>            
            </Table.Cell>
            <Table.Cell>
              <h2>Menu</h2>            
            </Table.Cell>
            <Table.Cell>
              <h2>Contact</h2>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Icon name="twitter"/> <Icon name="facebook"/> <Icon name="instagram"/>
              <br></br>
              <br></br>
              filling in other socials here
              <br></br>
              <Icon name="twitter"/>
            </Table.Cell>
            <Table.Cell>
              User agreement
              <br></br>
              Cookies policy
              <br></br>
              Other policies linked here
            </Table.Cell>
            <Table.Cell>
              Snapshot
              <br></br>
              Calendar
              <br></br>
              Watchlist
              <br></br>
              Resources
              <br></br>
              Profile
            </Table.Cell>
            <Table.Cell>
              Phone: 867-5309
              <br></br>
              Please_don't_email_me@biobreak.com
            </Table.Cell>
          </Table.Row>
        </Table.Body>
          <h3 style={{alignItems: "center"}}>developed by Zion Miller, will link Github here</h3><Icon name="github"/>
      </Table>
    </div>
  )
}
export default LoggedInFooter