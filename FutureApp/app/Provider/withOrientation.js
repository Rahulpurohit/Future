import React from 'react';

import { OrientationContext } from './OrientationProvider';

export default function withOrientation(Component) {
	return class extends React.Component {
		constructor(props) {
			super(props);
		}
		render() {
			return (
				<OrientationContext.Consumer>
					{state => {
						return <Component {...this.props} config={state} />;
					}}
				</OrientationContext.Consumer>
			);
		}
	};
}
