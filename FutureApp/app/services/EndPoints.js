'use strict';

const USER = {
	LOGIN: 'users/',
	REGISTER: 'users',
	GET_ALL_EVENT: 'api/User/GetAllShowOfEvent',
	GET_SET_OF_EVENT: 'api/User/GetSetsOfEvent',
	SEATS_BOOKED: 'api/User/SeatsBooked'
};

const OWNER = {
	LOGIN: 'users/',
	REGISTER: 'users',
	ADD_AUDITORIUM: '/User/',
	ADD_SCREEN: '/User/',
	ADD_SCREEN_SEAT: '/User/'
};

module.exports = {
	USER,
	OWNER
};
