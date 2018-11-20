/* @flow */

import React from 'react';
import Header from './Header';

const ScreenConfig = {
  mode: 'card',
  headerMode: 'float',
  initialRouteName: 'HomeScreen',
  navigationOptions: {
    gesturesEnabled: true,
    headerTintColor: '#fff',
    header: headerProps => <Header {...headerProps} style={styles.header} />,
  },

};

const styles = {
  header: {
    backgroundColor: '#6D1786',
  },
};

export default ScreenConfig;
