import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function StatusItem(props) {
  const item = props.item;
  return (
    <div className='status-item'>
        <div className='status-header'> {item.name} </div>
        <div className='status-body'>
            <div className='icon'><FontAwesomeIcon icon={item.icon} /></div>
            <div className='bar'/>
        </div>
    </div>
  );
}


export default StatusItem;
