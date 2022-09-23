import React from 'react'
import { Tab, Menu, Input, Segment} from 'semantic-ui-react'


const Snapshot = () => {

    const panes = [
        { menuItem: 'Chart', render: () => <Tab.Pane>Chart</Tab.Pane> },
        { menuItem: 'News', render: () => <Tab.Pane>News</Tab.Pane> },
        { menuItem: 'Ownership', render: () => <Tab.Pane>Ownership</Tab.Pane> },
        { menuItem: 'Cash', render: () => <Tab.Pane>Cash</Tab.Pane> },
        { menuItem: 'Expenses', render: () => <Tab.Pane>Expenses</Tab.Pane> },
        { menuItem: 'Pipeline', render: () => <Tab.Pane>Pipeline</Tab.Pane> },
      ]

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