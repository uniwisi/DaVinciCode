/*
*单人游戏界面
* @flow
*/
import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Text, Platform, TouchableOpacity, Image, ImageBackground } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class SingleGameScreen extends Component {




  state = {
  }



  render() {

    return (
      <View style={styles.container}>
        <Text>2</Text>
      </View>
    );
  }
}

export default SingleGameScreen;
