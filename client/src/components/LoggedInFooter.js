import React from 'react'
import { Table, Icon, Menu } from 'semantic-ui-react'


const LoggedInFooter = () => {
  return (
    <div style=
        {{
          bottom: "0",
          left: "0",
          position: "relative", //changed to relative from fixed also works if position is not there
          marginTop: "25px",
          width: "100%",
        }}>
            
        <Table  style={{backgroundColor: "#f0ead6", textAlign: "center"}}>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <img className="logo-img" style={{ fontSize: "5px", padding: "0px" }} id="logo" src={require("../biobreak_logo.png")} width="300" alt="logo"/>
            </Table.Cell>
            <Table.Cell>
              <Icon name="twitter"/>
              <Icon name="instagram"/>
              <Icon name="youtube"/>
              <Icon name="facebook"/>
            </Table.Cell>
            <Table.Cell>
              User agreement
              <br></br>
              Cookies policy
              <br></br>
            </Table.Cell>
            <Table.Cell>
              <Icon name="phone"/>310-867-5309
              <br></br>
              <Icon name="mail"/>email@biobreak.com
            </Table.Cell>
              <h3 style={{alignItems: "center"}}>Developed by Zion Miller</h3>
                <Menu.Item
                href="https://github.com/ZionMiller"
                position="right"
                target="_blank"
              >
                <Icon name="github" size="big" />
              </Menu.Item>
              <Menu.Item
                href="https://www.linkedin.com/in/zion-miller-b15344170/"
                position="right"
                target="_blank"
              >
                <Icon name="linkedin" size="big" />
              </Menu.Item>
              <Menu.Item
                href="https://medium.com/@zionmiller"
                position="right"
                target="_blank"
              >
                <Icon name="medium" size="big" />
            </Menu.Item>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}
export default LoggedInFooter