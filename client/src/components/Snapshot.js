import React from 'react'
import { Tab, Menu, Input, Segment} from 'semantic-ui-react'


const Snapshot = () => {

  return (
    <div>
    <Menu pointing>
    <Menu.Menu >
      <Menu.Item position='left'>
        <Input icon='search' placeholder='Search...' />
      </Menu.Item>
    </Menu.Menu>
    <Menu.Item position='right'
      name='Chart'
    />
    <Menu.Item
      name='News'
    />
    <Menu.Item
      name='Ownership'
    />
    <Menu.Item
      name='My Notes'
    />
    <Menu.Item
      name='Cash'
    />
    <Menu.Item
      name='Expenses'
    />
    <Menu.Item
      name='Pipeline'
    />
  </Menu>

  <Segment>
    <img src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
  </Segment>
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