import React, { useEffect, useState } from 'react'
import { Icon, Table, Button } from 'semantic-ui-react'

const Watchlist = ({currentUser}) => {

  let watchlistArr = console.log(currentUser)

  return (
    <Table celled style={{backgroundColor: "#f0ead6", textAlign: "center"}}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Ticker</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Change</Table.HeaderCell>
        <Table.HeaderCell>Cash</Table.HeaderCell>
        <Table.HeaderCell>Burn</Table.HeaderCell>
        <Table.HeaderCell>Catalyst</Table.HeaderCell>
        {/* <Table.HeaderCell>My Notes</Table.HeaderCell> */}
      </Table.Row>
    </Table.Header>

    {
      // watchlistArr.map((watchlist) => {
        <Table.Body>
          <Table.Row>
            <Table.Cell>
            <Icon name='delete'></Icon>
            </Table.Cell>
            <Table.Cell>Price here</Table.Cell>
            <Table.Cell>Change % from open</Table.Cell>
            <Table.Cell>Cash</Table.Cell>
            <Table.Cell>Burn</Table.Cell>
            <Table.Cell>Catalyst</Table.Cell>
            {/* <Table.Cell>
              My Notes
              <Icon name='expand arrows alternate'></Icon>
            </Table.Cell> */}
          </Table.Row>
      </Table.Body>
      // })
    }

  </Table>
  )
}

export default Watchlist