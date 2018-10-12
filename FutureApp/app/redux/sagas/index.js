import { all, fork } from 'redux-saga/effects';
import { watcherLoginUser, watcherRegisterUser } from './UserSagas';

export default function* rootSaga() {
	yield all([fork(watcherLoginUser)]);
	yield all([fork(watcherRegisterUser)]);
}
