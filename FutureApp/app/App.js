'use strict';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/stores/';
import AppNavigation from './AppNavigation';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<AppNavigation />
			</Provider>
		);
	}
}
