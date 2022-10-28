import React from 'react'
// import { Calendar } from '@fullcalendar/core';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import listPlugin from '@fullcalendar/list';
// import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
// import format from 'date-fns/format'
// import parse from 'date-fns/parse'
// import startOfWeek from 'date-fns/startOfWeek'
// import getDay from 'date-fns/getDay'
// import enUS from 'date-fns/locale/en-US'

// const locales = {
//   'en-US': enUS,
// }

// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// })


const CatalystCalendar = () => {


  // let calendar = new Calendar(calendarEl, {
  //   plugins: [ dayGridPlugin, timeGridPlugin, listPlugin ],
  //   initialView: 'dayGridMonth',
  //   headerToolbar: {
  //     left: 'prev,next today',
  //     center: 'title',
  //     right: 'dayGridMonth,timeGridWeek,listWeek'
  //   }
  // });

  // function myEventsList(start, end) {
  //   return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  // }
  
  // const myEventsList = randomDate(new Date(2022, 0, 1), new Date());
  // console.log(myEventsList);

  return (
    <div>
      <h2>Catalyst Calendar</h2>
      <div>
        {/* {calendar} */}
      </div>
    </div>

  )
}

export default CatalystCalendar