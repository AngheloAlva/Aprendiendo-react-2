import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { format, parse, startOfWeek, getDay, addHours } from 'date-fns'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import CalendarEvent from './calendar/components/CalendarEvent'

const locales = {
  'es-': enUS
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const events = [
  {
    title: 'My event',
    start: new Date(),
    end: addHours(new Date(), 2),
    allDay: false
  }
]

function CalendarApp () {
  return (
    <>
      <h1>CalendarApp</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 500 }}
        components={{
          event: CalendarEvent
        }}
      />
    </>
  )
}

export default CalendarApp
