import './App.css';
import StatusItem from './StatusItem'
import { faToiletPaper, faComments, faUtensils, faSocks, faLaugh, faBed } from '@fortawesome/free-solid-svg-icons'
import { icon } from '@fortawesome/fontawesome-svg-core';

function TextPad(props) {
  const item = props.item;
  const index = props.index;
  return (
    <div className='textpad'>
    <div className='status'>
      {getList().map((e) => <StatusItem item={e} />)}
    </div>
    </div>
  );
}

function getList() {
  return [
    {
      name: 'Bladder',
      icon: faToiletPaper
    },
    {
      name: 'Fun',
      icon: faLaugh
    },
    {
      name: 'Hunger',
      icon: faUtensils
    },
    {
      name: 'Social',
      icon: faComments
    },
    {
      name: 'Energy',
      icon: faBed
    },
    {
      name: 'Hygiene',
      icon: faSocks
    }
  ]
}

export default TextPad;
