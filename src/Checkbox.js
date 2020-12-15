import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getIcon } from './GetIcon'
function Checkbox(props) {
  const index = props.index;
  const value = props.value;

  return (
    <p className={'checkbox checkbox-' + (index % 2 + 1) }>
      <div className={'checkbox-icon ' + value.color}>
        <FontAwesomeIcon icon={getIcon(value.icon)} />
      </div>
       <span className='checkbox-span'>{value.text}</span> 
    </p>
  );
}

export default Checkbox;
