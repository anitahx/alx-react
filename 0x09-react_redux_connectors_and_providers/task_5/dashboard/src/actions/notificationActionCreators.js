import {
	MARK_AS_READ,
	SET_TYPE_FILTER,
	SET_LOADING_STATE,
	FETCH_NOTIFICATIONS_SUCCESS,
} from './notificationActionTypes';

export const markAsRead = (index) => {
	return {
		type: MARK_AS_READ,
		index,
	};
};
export const boundMarkAsRead = (index) => dispatch(markAsRead(index));

export const setNotificationFilter = (filter) => {
	return {
		type: SET_TYPE_FILTER,
		filter,
	};
};
export const boundSetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));

export const setLoadingState = (loading) => {
	return {
		type: SET_LOADING_STATE,
		loading,
	}
}

export const setNotifications = (data) => {
	return {
		type: FETCH_NOTIFICATIONS_SUCCESS,
		data,
	}
}

export const fetchNotifications = () => {
	return async (dispatch) => {
		// boundLogin(email, password);
    dispatch(setLoadingState(true));

		try {
      const res = await fetch('http://localhost:8564/notifications.json');
      const json = await res.json();
      return dispatch(setNotifications(json));
    } catch (error) {
      return dispatch(setLoadingState(false));
    }
	};
}