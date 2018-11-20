/* @flow */

import React from 'react';
import { Image } from 'react-native';
import FlatButton from '../common/FlatButton';
import backIcon from '../images/common/nav_icon_back.png';

class HeaderBackButton extends React.Component {
  props: {
    onPress?: () => void,
    width?: number
  };

  render() {
    return (
      <FlatButton
        onPress={this.props.onPress}
        icon={<Image source={backIcon} style={{ height: 15, width: 15, marginHorizontal: 4 }} />}
      />
    );
  }
}

export default HeaderBackButton;
