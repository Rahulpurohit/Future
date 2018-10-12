import _ from 'lodash';
import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';

import withResources from '../../Provider/withResources';
class Label extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<TouchableNativeFeedback
				onPress={() =>
					this.props.res.onChangeResources({
						color: {
							textColor: `rgb(${_.random(0, 255)},${_.random(0, 255)},${_.random(0, 255)})`
						},
						dimen: {
							textSizeExtraLarge: _.random(40, 70)
						}
					})
				}
				style={styles(this.props.res).container}
			>
				<Text style={styles(this.props.res).text}>{this.props.children}</Text>
			</TouchableNativeFeedback>
		);
	}
}

const styles = res =>
	StyleSheet.create({
		container: {
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center'
		},
		text: {
			color: res.color.textColor,
			fontSize: res.dimen.textSizeExtraLarge
		}
	});

export default withResources(Label);
