import React from 'react';

import { ResourceContext } from './ResourceProvider';

export default function withResources(Component) {
	return class extends React.Component {
		constructor(props) {
			super(props);
		}
		render() {
			return <ResourceContext.Consumer>{state => <Component {...this.props} res={state} />}</ResourceContext.Consumer>;
		}
	};
}
