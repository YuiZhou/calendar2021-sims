import './App.css';
import {normalize} from './Display';
import Holiday from './Holiday';
import TextPad from './TextPad';
import Display from './Display';

function App(props) {
  const item = props.item;
  const index = props.index;
  return (
    <div className={'app ' + show(item)} id={normalize(item.month) + '' + normalize(item.date)}>
      <Display item={item} index={index} />
      {showDetails(index, item)}
    </div>
  );
}

function showDetails(index, item) {
  if (isHoliday(item)) {
    return <Holiday item={item} index={index} /> 
  }
  return <TextPad item={item} index={index}  />
}

function show(item) {
  if (isHoliday(item)) {
    return ''
  }
  return ''
}

function isHoliday(item) {
  return item.title;
}

export default App;
