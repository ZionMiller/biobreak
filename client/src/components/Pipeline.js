import React from 'react'
import Snapshot from './Snapshot'
import { Table } from 'semantic-ui-react'



const Pipeline = ({returnedQuery}) => {
  console.log(returnedQuery)

  return (
    <div>
      <Table style={{backgroundColor: "#ca5cdd", textAlign: "center"}}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Drug</Table.HeaderCell>
            <Table.HeaderCell>Indication</Table.HeaderCell>
            <Table.HeaderCell>Stage</Table.HeaderCell>
            {/* <Table.HeaderCell>Revenue per Q</Table.HeaderCell>
            <Table.HeaderCell>Catalyst Estimate</Table.HeaderCell>
            <Table.HeaderCell>Competition</Table.HeaderCell> */}
          </Table.Row>
        </Table.Header>

        {
          returnedQuery.map((returned) => {
            return (
              <Table.Body>
                <Table.Cell>{returned.drug}</Table.Cell>
                <Table.Cell>{returned.indication}</Table.Cell>
                <Table.Cell>{returned.stage}</Table.Cell>
              </Table.Body>
            )
          })
        }
      </Table>
    </div>
  )
}

export default Pipeline