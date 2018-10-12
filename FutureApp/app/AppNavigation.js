import React from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { registerUser } from './redux/actions/UserActions';
import TestComponentScene from './ui/scenes/TestComponent';
import withResources from './Provider/withResources';
import withOrientation from './Provider/withOrientation';

import ResourceProvider from './Provider/ResourceProvider';
import OrientationProvider from './Provider/OrientationProvider';

class HomeScreen extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<View style={{ width: '90%' }}>
					<Text>Account Name:</Text>
					<TextInput style={{ height: 40, width: '90%' }} onChangeText={text => this.setState({ AcName: text })} />
					<Text>Email:</Text>
					<TextInput style={{ height: 40, width: '90%' }} onChangeText={text => this.setState({ Email: text })} />
					<Text>Password:</Text>

					<TextInput
						style={{ height: 40, width: '90%' }}
						onChangeText={text => this.setState({ Password: text })}
						secureTextEntry
					/>
				</View>

				<Button
					title="Register"
					onPress={() => {
						this.props.registerUser();
					}}
				/>
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.user
	};
};

const mapDispatchToProps = dispatch => {
	return {
		registerUser: args => {
			dispatch(registerUser(args));
		}
	};
};

const homeWithRedux = connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeScreen);

const stackNavigator = createStackNavigator(
	{
		Home: {
			screen: withOrientation(withResources(TestComponentScene))
		}
	},
	{
		headerMode: 'none'
	}
);

export default OrientationProvider(ResourceProvider(stackNavigator));
