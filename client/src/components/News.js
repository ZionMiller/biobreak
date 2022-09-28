import React from 'react'
import Snapshot from './Snapshot'
import { Card } from 'semantic-ui-react'


const News = () => {

  // sample data for news cards
  const items = [
    {
      header: 'random news',
      description:
        'News blurp here',
      meta: 'News date here',
    },
    {
      header: 'random news',
      description:
        'News blurp here',
      meta: 'News date here',
    },
    {
      header: 'random news',
      description:
        'News blurp here',
      meta: 'News date here',
    }
  ]

  return (
    <div>
        <Snapshot />
        <h2>News</h2>
        <Card.Group items={items}/>
    </div>
  )
}

export default News