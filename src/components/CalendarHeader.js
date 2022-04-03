import moment from "moment";

function CalendarHeader(props) {

  const {date} = props;
  const today = moment(date).format('D')
  const todayDayName = moment(date).format('dddd')
  const todayMonthName = moment(date).format('MMMM')
  const todayMonthNameSubj = moment(date).format('D MMMM').split(' ')
  const todayYear = moment(date).format(' YYYY')
  return (
    <>
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{todayDayName}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{today}</div>
          <div className="ui-datepicker-material-month">{todayMonthNameSubj[1]}</div>
          <div className="ui-datepicker-material-year">{todayYear}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{todayMonthName}</span>&nbsp;<span className="ui-datepicker-year">2017</span>
        </div>
      </div>
    </>
  )
}

export default CalendarHeader;
