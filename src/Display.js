import './App.css';
function Display(props) {
  const item = props.item;
  const index = props.index;
  return (
    <div className='top'>
    <div className='timer'><span className='count'>{index + 1063}</span><span className='timer-logo'/></div>
      <div className='display'>
      <p className='normal-text month'>{normlize_month(item.month)}&nbsp;2021</p>
      <h1>{normalize(item.date)}<span className='normal-text'>{index_to_week(index)}</span></h1>
      <p  className='normal-text lunar'>{item.lunar}</p>
    </div>
    </div>
  );
}

function index_to_week(value) {
  return ['Fri.', 'Sat.', 'Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thu.', ][value % 7]
}

function normlize_month(value) {
  return ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'][value - 1];
}

export default Display;
export function normalize(value) {
  if (value < 10) {
    return '0' + value;
  }
  return value;
}