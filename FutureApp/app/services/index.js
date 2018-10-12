import APIManager from './APIManager';
import EndPoints from './EndPoints';
import OwnerManger from './OwnerManger';
import UserManager from './UserManager';

module.exports = {
	APIManager,
	...EndPoints,
	OwnerManger,
	...UserManager
};
