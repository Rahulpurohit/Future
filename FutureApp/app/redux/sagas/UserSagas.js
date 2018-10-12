//
// Copyright © 2017-Present, Punchh, Inc.
// All rights reserved.
//
'use strict';

import { call, put, take, fork, select } from 'redux-saga/effects';
import { USER_LOGIN, USER_REGISTER, USER_LOGIN_SUCCESS, USER_REGISTER_SUCCESS } from '../types';
import { UserManager } from '../../services/';

// ****************
// WORKERS
// ****************
function* workerLoginUser(action) {
	const { Email, Password } = action.loginMeta;
	try {
		const response = yield call(UserManager.loginUser, { Email, Password });
		yield put({ type: USER_LOGIN_SUCCESS, user: response.data });
	} catch (e) {
		action.errorhandler(e.response);
	}
}

function* workerRegisterUser(action) {
	try {
		const response = yield call(UserManager.registerUser, null);
		console.warn(JSON.stringify(response, null, 3));

		yield put({ type: USER_REGISTER_SUCCESS, user: response.data });
	} catch (e) {
		console.log('====================================');
		console.log(e);
		console.log('====================================');
		e;
	}
}

// ****************
// WATCHERS
// ****************

const watcherLoginUser = function*() {
	while (true) {
		const action = yield take(USER_LOGIN);
		yield fork(workerLoginUser, action);
	}
};

const watcherRegisterUser = function*() {
	while (true) {
		const action = yield take(USER_REGISTER);
		yield fork(workerRegisterUser, action);
	}
};

module.exports = {
	watcherLoginUser,
	watcherRegisterUser
};
