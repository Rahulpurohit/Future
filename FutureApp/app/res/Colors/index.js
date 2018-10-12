import { Platform } from 'react-native';

const platform = Platform.OS;

const colors = {
	// Card
	cardDefaultBg: '#fff',
	cardBorderColor: '#ccc',

	// CheckBox
	CheckboxRadius: platform === 'ios' ? 13 : 0,
	CheckboxBorderWidth: platform === 'ios' ? 1 : 2,
	CheckboxPaddingLeft: platform === 'ios' ? 4 : 2,
	CheckboxPaddingBottom: platform === 'ios' ? 0 : 5,
	CheckboxIconSize: platform === 'ios' ? 21 : 16,
	CheckboxIconMarginTop: platform === 'ios' ? undefined : 1,
	CheckboxFontSize: platform === 'ios' ? 23 / 0.9 : 17,
	DefaultFontSize: 17,
	checkboxBgColor: '#039BE5',
	checkboxSize: 20,
	checkboxTickColor: '#fff',

	// Color
	brandPrimary: platform === 'ios' ? '#007aff' : '#3F51B5',
	brandInfo: '#62B1F6',
	brandSuccess: '#5cb85c',
	brandDanger: '#d9534f',
	brandWarning: '#f0ad4e',
	brandDark: '#000',
	brandLight: '#f4f4f4',

	// Footer
	footerDefaultBg: platform === 'ios' ? '#F8F8F8' : '#3F51B5',

	// FooterTab
	tabBarTextColor: platform === 'ios' ? '#737373' : '#bfc6ea',
	tabBarTextSize: platform === 'ios' ? 14 : 11,
	activeTab: platform === 'ios' ? '#007aff' : '#fff',
	sTabBarActiveTextColor: '#007aff',
	tabBarActiveTextColor: platform === 'ios' ? '#2874F0' : '#fff',
	tabActiveBgColor: platform === 'ios' ? '#cde1f9' : '#3F51B5',

	// Header
	toolbarBtnColor: platform === 'ios' ? '#007aff' : '#fff',
	toolbarDefaultBg: platform === 'ios' ? '#F8F8F8' : '#3F51B5',
	toolbarSearchIconSize: platform === 'ios' ? 20 : 23,
	toolbarInputColor: platform === 'ios' ? '#CECDD2' : '#fff',

	toolbarBtnTextColor: platform === 'ios' ? '#007aff' : '#fff',
	toolbarDefaultBorder: platform === 'ios' ? '#a7a6ab' : '#3F51B5',

	//Input Color
	inputBorderColor: '#D9D5DC',
	inputSuccessBorderColor: '#2b8339',
	inputErrorBorderColor: '#ed2f2f',

	//List Color
	listBg: 'transparent',
	listBorderColor: '#c9c9c9',
	listDividerBg: '#f4f4f4',
	listBtnUnderlayColor: '#DDD',
	listItemPadding: platform === 'ios' ? 10 : 12,
	listNoteColor: '#808080',

	// Progress Bar
	defaultProgressColor: '#E4202D',
	inverseProgressColor: '#1A191B',

	//Radio
	radioSelectedColorAndroid: '#3F51B5',

	// Segment
	segmentBackgroundColor: platform === 'ios' ? '#F8F8F8' : '#3F51B5',
	segmentActiveBackgroundColor: platform === 'ios' ? '#007aff' : '#fff',
	segmentTextColor: platform === 'ios' ? '#007aff' : '#fff',
	segmentActiveTextColor: platform === 'ios' ? '#fff' : '#3F51B5',
	segmentBorderColor: platform === 'ios' ? '#007aff' : '#fff',
	segmentBorderColorMain: platform === 'ios' ? '#a7a6ab' : '#3F51B5',

	// Spinner
	defaultSpinnerColor: '#45D56E',
	inverseSpinnerColor: '#1A191B',

	// Tab
	tabDefaultBg: platform === 'ios' ? '#F8F8F8' : '#3F51B5',
	topTabBarTextColor: platform === 'ios' ? '#6b6b6b' : '#b3c7f9',
	topTabBarActiveTextColor: platform === 'ios' ? '#007aff' : '#fff',
	topTabBarBorderColor: platform === 'ios' ? '#a7a6ab' : '#fff',
	topTabBarActiveBorderColor: platform === 'ios' ? '#007aff' : '#fff',

	// Tabs
	tabBgColor: '#F8F8F8',

	// Text
	textColor: '#f00',
	inverseTextColor: '#fff',

	// Title
	titleFontSize: platform === 'ios' ? 17 : 19,
	subTitleFontSize: platform === 'ios' ? 12 : 14,
	subtitleColor: platform === 'ios' ? '#000' : '#fff',
	titleFontColor: platform === 'ios' ? '#000' : '#fff'
};

export default colors;
