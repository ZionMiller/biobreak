import React from 'react'
import Snapshot from './Snapshot'
import { Card } from 'semantic-ui-react'


const News = ({ticker}) => {

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

  // rapid api test
  // const settings = {
  //   "async": true,
  //   "crossDomain": true,
  //   "url": "https://yahoo-finance97.p.rapidapi.com/institutional-holders",
  //   "method": "POST",
  //   "headers": {
  //     "content-type": "application/x-www-form-urlencoded",
  //     "X-RapidAPI-Key": "e0c7428433msh933632b9dbb669ap1051b5jsn6c05354c1ba1",
  //     "X-RapidAPI-Host": "yahoo-finance97.p.rapidapi.com"
  //   },
  //   "data": {
  //     "symbol": "grts"
  //   }
  // };

  return (
    
    <div>  
        <h2>News</h2>
        <Card.Group items={items}/>
    </div>
  )
}

export default News