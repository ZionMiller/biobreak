import React, { useState } from 'react'
import { AdvancedChart } from "react-tradingview-embed";
import Snapshot from './Snapshot'

const Chart = ({ticker, setTicker, searchedTicker}) => {

    let themeMode = "light"
  return (
      <div>
        <Snapshot ticker={ticker} setTicker={setTicker} searchedTicker={searchedTicker}/>
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