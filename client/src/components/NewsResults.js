import React from 'react'
import { Card, Button } from 'semantic-ui-react'


const NewsResults = ({title, link, publisher, providerPublishTime}) => {
  return (
    <Card className="Card">
    <Card.Content>
    <Card.Header>{title}</Card.Header>
        <p><strong></strong>{publisher}</p>
        <p><strong></strong>{new Date(providerPublishTime).toString()}</p>
        {/* <p><strong></strong>{link}</p> */}
        <a href={link} target="_blank"><Button>View Article</Button></a>
    </Card.Content>
  </Card>
  )
}

export default NewsResults