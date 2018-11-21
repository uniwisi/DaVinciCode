/*
*首页
* @flow
*/
import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Text, Platform, TouchableOpacity, Image, ImageBackground } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'skyblue',
    borderRadius: 4,
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

class HomeScreen extends Component {




  state = {
  }



  render() {

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('SingleGameScreen')}>
          <Text>单人游戏</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeScreen;
