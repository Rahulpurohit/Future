'use strict';

import APIManager from './APIManager';
import { USER } from './EndPoints';

class UserManager {
	static loginUser(block, params) {
		return APIManager.postHandle(USER.LOGIN, block, param);
	}

	static registerUser(block, params) {
		return APIManager.getHandle(USER.REGISTER, block, params);
	}

	static getAllEvent(block, params) {
		return APIManager.get(USER.GET_ALL_EVENT, params);
	}

	static getSetOfEvent(block, params) {
		return APIManager.get(USER.GET_SET_OF_EVENT, params);
	}

	static getBookSeats(block, params) {
		return APIManager.get(USER.SEATS_BOOKED, params);
	}
}
module.exports = { UserManager };
