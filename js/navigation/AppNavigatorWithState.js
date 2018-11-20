/* @flow */

import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import RouteConfigs from './RouteConfigs';
import ScreenConfig from './ScreenConfig';

export const AppNavigator = StackNavigator(RouteConfigs, ScreenConfig);


const AppNavigatorWithState = ({ dispatch, nav }) => {
  const navigation = addNavigationHelpers({ dispatch, state: nav });
  global.navigation = navigation;
  return (<AppNavigator
    navigation={navigation}
  />);
};

// const mapStateToProps = state => ({
//   nav: state.nav,
// });

// export default connect(mapStateToProps)(AppNavigatorWithState);
export default AppNavigatorWithState;
