import React, { useState } from 'react'
import { AdvancedChart } from "react-tradingview-embed";
import Snapshot from './Snapshot'

const Chart = ({ticker}) => {

    let themeMode = "light"
  return (
      <div>
        <Snapshot />
        <AdvancedChart widgetPropsAny={
            {
                "theme": `$${themeMode}`, "autosize": false,
                "symbol": `NASDAQ:${ticker}`
            }
        }/>
    </div>
  )
}

export default Chart