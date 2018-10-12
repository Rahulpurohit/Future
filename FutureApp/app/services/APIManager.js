'use strict';

import { PropTypes } from 'prop-types';
import axios from 'axios';

type objType = PropTypes.func;

export default class APIManager {
	static API = axios.create({ baseURL: 'https://api.github.com/' });

	static handleResponse(promise: Promise, obj: objType): Promise {
		if (obj) {
			promise.then(response => obj(response.data, null)).catch(error => obj(null, error));
			return null;
		}
		return promise;
	}

	static parseEndpoint(endPoint: string): string {
		return `${endPoint}`;
	}

	static get(endPoint: string, params = null): Promise {
		return this.API.get(this.parseEndpoint(endPoint), { params });
	}

	static getHandle(endPoint: string, obj: objType, param = null): Promise {
		const promise = this.get(endPoint, param);
		return this.handleResponse(promise, obj);
	}

	static post(endPoint: string, param = null): Promise {
		return this.API.post(this.parseEndpoint(endPoint), param, {
			'Cache-Control': 'no-cache',
			'user-key': '69299fa4aaab8a75777f4c3ed3f9810e'
		});
	}

	static postHandle(endPoint: string, obj: objType, param = null): Promise {
		const promise = this.post(endPoint, param);
		return this.handleResponse(promise, obj);
	}

	static put(endPoint: string, param = null): Promise {
		return this.API.put(this.parseEndpoint(endPoint), param);
	}

	static putHandle(endPoint: string, obj: objType, param = null): Promise {
		const promise = this.put(endPoint, param);
		return this.handleResponse(promise, obj);
	}

	static delete(endPoint: string, param = null): Promise {
		return this.API.delete(this.parseEndpoint(endPoint), param);
	}

	static deleteHandle(endPoint: string, obj: objType, param = null): Promise {
		const promise = this.delete(endPoint, param);
		return this.handleResponse(promise, obj);
	}
}
