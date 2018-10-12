import React, { Component } from 'react';

import { ScrollView } from 'react-native';
import { Label } from '../component';

export default class TestComponentScene extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidCatch(error, info) {
		console.log('====================================');
		console.log(error, info);
		console.log('====================================');
	}

	render() {
		return (
			<ScrollView>
				<Label>
					{/* {this.props.res.string.app_name} */}
					{this.props.config}
				</Label>
			</ScrollView>
		);
	}
}
