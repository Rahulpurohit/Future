'use strict';

import APIManager from './APIManager';
import { OWNER } from './EndPoints';

class OwnerManger {
	static loginUser(block, params) {
		return APIManager.postHandle(OWNER.LOGIN, block, param);
	}

	static registerUser(block, params) {
		return APIManager.postHandle(OWNER.REGISTER, block, params);
	}

	static addAuditorium(block, params) {
		return APIManager.postHandle(OWNER.ADD_AUDITORIUM, block, params);
	}

	static addScreen(block, params) {
		return APIManager.postHandle(OWNER.ADD_SCREEN, block, params);
	}

	static addScreenSeat(block, params) {
		return APIManager.postHandle(OWNER.ADD_SCREEN_SEAT, block, params);
	}
}
module.exports = { OwnerManger };
