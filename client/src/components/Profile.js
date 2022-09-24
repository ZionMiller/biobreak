import React from 'react'
import { MarketOverview } from "react-tradingview-embed";
import { Button, Segment, Grid, Image, Divider, Card } from 'semantic-ui-react'


const Profile = ({handleLogOut, currentUser}) => {
  return (
    <Segment>
    <Grid columns={2} relaxed='very'>
      <Grid.Column>
        <MarketOverview widgetProps={{"theme": "light"}} />
      </Grid.Column>
      <Grid.Column>
      <Card.Group>
    <Card>
      <Card.Content>
        <Card.Header>{(currentUser.first_name) + "  " + (currentUser.last_name)}</Card.Header>
        <Card.Meta>Zip: {currentUser.zipcode}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Update Profile
          </Button>
          <Button onClick={handleLogOut} basic color='red'>
            Logout
          </Button>
        </div>
      </Card.Content>
    </Card>
  
  </Card.Group>
      </Grid.Column>
    </Grid>

    <Divider vertical></Divider>
  </Segment>
  )
}

export default Profile
