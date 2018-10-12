import { USER_LOGIN, USER_REGISTER, USER_GET_ALL_EVENTS, USER_GET_SET_OF_EVENT, USER_SEATS_BOOKED } from '../types';

// ****************
// actions
// ****************

const loginUser = args => ({
	type: USER_LOGIN,
	payload: { ...args }
});

const registerUser = args => ({
	type: USER_REGISTER,
	payload: { ...args }
});

module.exports = {
	loginUser,
	registerUser
};
