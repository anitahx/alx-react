import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite'

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.selected_style = this.props.type === 'default' ?  notifyItem.default : notifyItem.urgent;
  }

  render() {
    return (
      this.props.value ? 
      <li
      data-notification-type={this.props.type}
      onClick={()=> this.props.markAsRead(this.props.id)}
      className={css(this.selected_style, notifyItem.notifyIt)}
      >{this.props.value}</li> 
      :
      <li
      data-notification-type={this.props.type}
      dangerouslySetInnerHTML={this.props.html}
      onClick={()=> this.props.markAsRead(this.props.id)}
      className={css(this.selected_style, notifyItem.notifyIt)}
      ></li> 
    );
  }
}

const notifyItem = StyleSheet.create({
  notifyIt: {
    borderBottom: '1px solid black',
    padding: '10px 8px',
    fontSize: '20px',
    listStyle: 'none',
  },

  urgent: {
		color: 'red'
	},

	default: {
		color: 'blue'
	}
});

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {
    console.log('empty');
  },
  id: 0
};

NotificationItem.propTypes = {
  html: PropTypes.shape({__html: PropTypes.string}),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

export default NotificationItem;