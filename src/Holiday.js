import './App.css';
import Checkbox from './Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getIcon } from './GetIcon'

function Holiday(props) {
  const item = props.item;
  const checklist = item.checklist || [];
  const index = props.index;

  if (checklist.length == 0) {
    return (<div />)
  }

  return (
    <div className='holiday'>
      <div className='holiday-header'>
        <div className={'holiday-icon ' + item.color } >
          <FontAwesomeIcon icon={getIcon(item.icon)} />
        </div>
        <span className='holiday-span'>{item.title}</span>
      </div>
      <div className='holiday-body'>
      {checklist.map((e, i) => <Checkbox index={i} value={e}/>)}
      </div>
    </div>
  );
}

export default Holiday;
