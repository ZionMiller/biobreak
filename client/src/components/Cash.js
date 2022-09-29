import React from 'react'
import Snapshot from './Snapshot'
import {HorizontalBarSeries} from 'react-vis';


const Cash = ({ticker}) => {

  const myData = [
    {x: 'A', y: 10},
    {x: 'B', y: 5},
    {x: 'C', y: 15}
  ]

  return (
    <div>
        <Snapshot />
        Cash
    </div>
  )
}

export default Cash