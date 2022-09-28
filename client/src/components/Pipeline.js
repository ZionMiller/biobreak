import React from 'react'
import Snapshot from './Snapshot'
import { Table } from 'semantic-ui-react'



const Pipeline = () => {
  return (
    <div>
        <Snapshot />
        <h2>Pipeline</h2>

      <Table style={{backgroundColor: "#ca5cdd", textAlign: "center"}}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Drug</Table.HeaderCell>
            <Table.HeaderCell>Indication</Table.HeaderCell>
            <Table.HeaderCell>Stage</Table.HeaderCell>
            <Table.HeaderCell>Revenue per Q</Table.HeaderCell>
            <Table.HeaderCell>Catalyst Estimate</Table.HeaderCell>
            <Table.HeaderCell>Competition</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>drug 1</Table.Cell>
            <Table.Cell>indication 1</Table.Cell>
            <Table.Cell>Phase</Table.Cell>
            <Table.Cell>$100M</Table.Cell>
            <Table.Cell>Q4</Table.Cell>
            <Table.Cell>Other tickers here</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}

export default Pipeline