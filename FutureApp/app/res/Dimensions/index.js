//
// Copyright © 2017-Present, Punchh, Inc.
// All rights reserved.
//
'use strict';

import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;

const measureExpandableAccordingToHeight = () => {
	// iPhone specific ['667, 812']

	if (height >= 812) {
		return screenHeight / 2.25;
	}
	return screenHeight / 2;
};

const space = metric => {
	if (height < 667) {
		return metric - 5;
	}
	return metric;
};

const metrics = {
	screenWidth,
	screenHeight,
	buttonHeight: 47.5,
	expandableExtraHeight: space(10),
	expandableMarginRight: space(44),
	locationDetailsClosedHeight: space(40),
	locationDetailsOpenHeight: measureExpandableAccordingToHeight(),
	highestMargin: space(20),
	highestMarginBottom: space(50),
	highestPaddingHorizontal: space(20),
	highestPaddingVertical: space(20),
	marginHorizontal: space(15),
	marginVertical: space(15),
	paddingHorizontal: space(15),
	paddingVertical: space(15),
	smallMargin: 5,
	smallPadding: 5,
	mediumMargin: space(10),
	mediumPadding: space(10),
	buttonVerticalPadding: space(10),
	highMargin: space(15),
	highestPadding: space(20),
	headingFontSize: 30,
	heartImageSize: {
		width: 60,
		height: 40
	},
	standardFontSize: 16,
	iconDimension: {
		height: 34,
		width: 34
	},
	searchBarHeight: 30,
	appTabHeight: 30,
	appHeaderHeight: Platform.OS === 'ios' ? 44 : 34,
	appFooterHeight: screenHeight * 0.2,

	//Text Size
	textSizeSmall: 10,
	textSize: 12,
	textSizeMedium: 14,
	textSizeLarge: 16,
	textSizeExtraLarge: 18
};

export default metrics;
