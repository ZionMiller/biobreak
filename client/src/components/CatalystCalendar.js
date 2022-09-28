import React from 'react'
import { Calendar, globalizeLocalizer } from 'react-big-calendar'
import globalize from 'globalize'

const localizer = globalizeLocalizer(globalize)

const CatalystCalendar = () => {
  return (
    <div>
      <h2>Catalyst Calendar</h2>
      <div id='calendar' style={{display: "flex"}}>
        <Calendar 
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 350 }}
        />
      </div>
    </div>
  )
}

export default CatalystCalendar