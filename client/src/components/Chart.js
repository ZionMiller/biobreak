import React, { useState } from 'react'
import { AdvancedChart } from "react-tradingview-embed";
import Snapshot from './Snapshot'

const Chart = ({query, searchedTicker, setQuery}) => {

    let themeMode = "light"
  return (
      <div>
        <AdvancedChart widgetPropsAny={
            {
                "theme": `$${themeMode}`, "autosize": false,
                "symbol": `NASDAQ:${query}`
            }
        }/>
    </div>
  )
}

export default Chart