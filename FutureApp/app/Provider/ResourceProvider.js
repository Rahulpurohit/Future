import React from 'react';
import { Platform } from 'react-native';

import { Colors, Fonts, Dimensions, Images, Strings } from '../res';

export const ResourceContext = React.createContext();

const ResourceProvider = WrappedComponent => {
	return class extends React.Component {
		constructor(props) {
			super(props);
			this.isChange = false;

			//	this.platform = Platform.OS;
			this.state = {
				color: Colors,
				font: Fonts,
				dimen: Dimensions,
				images: Images,
				string: Strings,
				onChangeResources: ({ color = {}, dimen = {} }) => {
					this.setState({ color: Object.assign({}, Colors, color) });
					this.setState({ dimen: Object.assign({}, Dimensions, dimen) });
				}
			};
		}

		render() {
			return (
				<ResourceContext.Provider value={this.state}>
					<WrappedComponent {...this.props} />
				</ResourceContext.Provider>
			);
		}
	};
};

export default ResourceProvider;
