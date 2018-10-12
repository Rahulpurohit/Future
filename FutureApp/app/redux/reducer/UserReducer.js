'use strict';

import {
	USER_LOGIN_SUCCESS,
	USER_REGISTER_SUCCESS,
	USER_GET_ALL_EVENTS_SUCCESS,
	USER_GET_SET_OF_EVENT_SUCCESS,
	USER_SEATS_BOOKED_SUCCESS
} from '../types';

const INITIAL_STATE = {
	user: undefined,
	events: [],
	user_seats: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case USER_LOGIN_SUCCESS:
			return { ...state, user: action.user };
		case USER_REGISTER_SUCCESS:
			return { ...state, user: action.user };
		case USER_GET_ALL_EVENTS_SUCCESS:
			return { ...state, events: action.events };
		case USER_GET_SET_OF_EVENT_SUCCESS:
			return { ...state, events: action.events };
		case USER_SEATS_BOOKED_SUCCESS:
			return { ...state, recentOrder: action.user_seats };
		default:
			return state;
	}
};
