import PropTypes from 'prop-types';
import moment from "moment";
import 'moment/locale/ru';
import CalendarHeader from './CalendarHeader'
import CalendarWeeks from './CalendarWeeks'

moment.locale('ru');

function Calendar(props) {
  const {date} = props;

  const value = moment();
  const startDate = value.clone().startOf('month').startOf('week');
  const endDate = value.clone().endOf('month').endOf('week');
  const day = startDate.clone().subtract(1 ,'day')
  const calendar = [];
  while (day.isBefore(endDate, 'day')) {
    calendar.push(
      Array(7).fill(0).map(() => day.add(1, 'day').clone())
    );
  }

  function isToday(day) {
    return value.isSame(day, 'day')
  }

  function thisMonth(day) {
    return value.isSame(day, 'month')
  }

  function styleDay(day) {
    if(isToday(day)) return 'ui-datepicker-today'
    if(!thisMonth(day)) return 'ui-datepicker-other-month'
    return ''
  }

  return (
    <div className="ui-datepicker">
      <CalendarHeader date={date} />
      <table className="ui-datepicker-calendar">
        <CalendarWeeks />
        <tbody>
        {calendar.map(week => (<tr key={week}>
          {
            week.map(day => <td className={styleDay(day)}  key={day.format('D')}>{day.format('D').toString()}</td>)
          }
        </tr>))
        }
        </tbody>
      </table>
    </div>
  )
}

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired
}

export default Calendar;
