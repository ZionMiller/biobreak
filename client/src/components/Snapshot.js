import React from 'react'
import { Tab, Menu, Input, Segment, MenuItem, Label } from 'semantic-ui-react'
import { Link, useHistory } from 'react-router-dom'

const Snapshot = () => {

  return (
    <div>
    <Menu pointing>
    <Menu.Menu >
      <Menu.Item position='left'>
        <Input icon='search' placeholder='Search...' />
      </Menu.Item>
    </Menu.Menu>


      <Label as='a' content='Market Cap:' style={{width: "100px"}} color='blue'/>
      <Label as='a' content='Cash:' style={{width: "100px"}} color='blue'/>
      <Label as='a' content='Burn:' style={{width: "100px"}} color='blue'/>
      <Label as='a' content='Debt:' style={{width: "100px"}} color='blue'/>
      <Label as='a' content='Catalyst:' style={{width: "100px"}} color='blue'/>

    <Menu.Item position='right' name='Chart'>
      <Link to='/snapshot/chart'>Chart</Link>
    </Menu.Item>
    <Menu.Item>
        <Link to='/snapshot/news'>News</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to='/snapshot/Ownership'>Ownership</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to='/snapshot/my-notes'>My Notes</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to='/snapshot/cash'>Cash</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to='/snapshot/expenses'>Expenses</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to='/snapshot/pipeline'>Pipeline</Link>
    </Menu.Item>
  </Menu>

</div>
  )
}

export default Snapshot
//         </Grid.Column>
//         <Grid.Column>
//             <Tab />
//         </Grid.Column>
//     <Divider vertical>And</Divider>
//     </Grid>
// </Segment>

    /* <Menu.Item>
        <Input icon='search' placeholder='Search...' />
      {/* </Menu.Item> */
  /* <Tab panes={panes} />  */