import React from 'react'
import { Tab, Icon, Divider, Grid, Segment, Table } from 'semantic-ui-react'


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
        <Tab panes={panes} />
    </div>
    //         </Grid.Column>
    //         <Grid.Column>
    //             <Tab />
    //         </Grid.Column>
    //     <Divider vertical>And</Divider>
    //     </Grid>
    // </Segment>
  )
}

export default Snapshot