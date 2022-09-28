import React from 'react'
import Snapshot from './Snapshot'
import { Form, Table, Button  } from 'semantic-ui-react'



const MyNotes = () => {
  return (
    <div>
        <Snapshot />
        <br></br>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input fluid label='add note here' placeholder='your notes go here'/>
            <Form.Input fluid label='Add URL here' placeholder='your URL if applicable here' />
          </Form.Group>
          <Button style={{backgroundColor: "#FFB52E"}}>Post Note</Button>
        </Form>

          <h2 textAlign='center'>My Notes</h2>
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Note Date</Table.HeaderCell>
                <Table.HeaderCell>Note Links</Table.HeaderCell>
                <Table.HeaderCell>Note</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  date goes here
                </Table.Cell>
                <Table.Cell>
                  sample note link here
                </Table.Cell>
                <Table.Cell>
                  Note goes here
                </Table.Cell>
              </Table.Row>
            </Table.Body>
    </Table>
    </div>
  )
}

export default MyNotes