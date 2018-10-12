import React from 'react';
import { Platform } from 'react-native';

// Here get App Level Configs.
const config = {
	PLATFORM_NAME: Platform.OS,
	OS_VERSION: Platform.Version
};

export default config;
