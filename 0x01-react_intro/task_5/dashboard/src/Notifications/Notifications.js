import React from 'react';
import closeIcon from '../assets/close-icon.png'
import './Notifications.css'
import { getLatestNotification } from '../utils/utils';

const consoleDisplay =()=> {console.log('Close button has been clicked')}
function Notifications() {
  return (
    <div className='Notifications'>
        <p>Here is the list of notifications</p>
        <button
        style={{ position: 'absolute', top: '7px', right: '7px', border: 'none', background: 'none', padding: '0' }}
				aria-label='Close'
				onClick={consoleDisplay}
        >
          <img style={{ display: 'inline', marginTop: '5px', marginRight: '5px', padding: '0' }} src={closeIcon} alt='Close' width="15px"/>
        </button>

        <ul>
          <li data='default'>New course available</li>
          <li data='urgent'>New resume available</li>
          <li
            data='urgent'
            dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
          ></li>
			</ul>
    </div>
  );
}

export default Notifications