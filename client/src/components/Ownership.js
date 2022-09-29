import React from 'react'
import Snapshot from './Snapshot'
import {RadialChart} from 'react-vis';



const Ownership = () => {
  const myData = [{angle: 1}, {angle: 5}, {angle: 2}]
  return (
    <div>

        <RadialChart style={{alignItems: "center"}}
          data={myData}
          width={300}
          height={300} />
 
    </div>
  )
}

export default Ownership