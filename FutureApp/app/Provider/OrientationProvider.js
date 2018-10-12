import React from 'react';
import { Dimensions } from 'react-native';

export const OrientationContext = React.createContext();

/**
 *
 * @param {ScaledSize} dim the dimensions object
 * @param {*} limit the limit on the scaled dimension
 */
const msp = (dim, limit) => {
	return dim.scale * dim.width >= limit || dim.scale * dim.height >= limit;
};

/**
 * Returns true if the screen is in portrait mode
 */
const isPortrait = () => {
	const dim = Dimensions.get('screen');
	return dim.height >= dim.width;
};

/**
 * Returns true if the device is a tablet
 */
const isTablet = () => {
	const dim = Dimensions.get('screen');
	return (dim.scale < 2 && msp(dim, 1000)) || (dim.scale >= 2 && msp(dim, 1900));
};

const OrientationProvider = WrappedComponent => {
	return class extends React.Component {
		constructor(props) {
			super(props);

			this.state = {
				orientation: isPortrait() ? 'portrait' : 'landscape',
				deviceType: isTablet() ? 'tablet' : 'phone'
			};

			//Event Listener for orientation changes
			Dimensions.addEventListener('change', () => {
				this.setState({
					orientation: Platform.isPortrait() ? 'portrait' : 'landscape'
				});
			});
		}

		render() {
			return (
				<OrientationContext.Provider value={this.state}>
					<WrappedComponent {...this.props} />
				</OrientationContext.Provider>
			);
		}
	};
};

export default OrientationProvider;
