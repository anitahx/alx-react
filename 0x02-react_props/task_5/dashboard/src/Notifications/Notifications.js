import React from 'react';
import closeIcon from '../assets/close-icon.png';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types'
import NotificationItemShape from './NotificationItemShape';

const consoleDisplay =()=> {console.log('Close button has been clicked')}

function Notifications({ displayDrawer, listNotifications }) {
  return (
    <div className='menuItem' >
      <p>Your notifications</p>
      {displayDrawer ? 
      <div className='Notifications'>
        { listNotifications.length !== 0 ?
          <p>Here is the list of notifications</p>
        : null}
          <button
          style={{ position: 'absolute', top: '7px', right: '7px', border: 'none', background: 'none', padding: '0' }}
          aria-label='Close'
          onClick={consoleDisplay}
          >
            <img style={{ display: 'inline', marginTop: '5px', marginRight: '5px', padding: '0' }} src={closeIcon} alt='Close' width="15px"/>
          </button>

          <ul>
            {listNotifications.length === 0 ? <NotificationItem type="default" value="No new notification for now"/> : null}
          {listNotifications.map((item) => {
            return <NotificationItem key={item.id} html={item.html} type={item.type} value={item.value}/>
          })}
        </ul>
      </div>
      : ''}
    </div>
  );
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

export default Notifications