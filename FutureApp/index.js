/** @format */

import { AppRegistry } from 'react-native';
import App from './app/App';
import { enableReactotron } from './app/config/ReactotronConfig';
enableReactotron(true);
AppRegistry.registerComponent('FutureApp', () => App);
