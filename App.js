// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View } from 'react-native';
// import Navigator from './js/navigation/Router';


// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Navigator />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// import {
//   createStackNavigator,
// } from 'react-navigation';
// import HomeScreen from './js/screen/HomeScreen';
// import SingleGameScreen from './js/screen/SingleGameScreen';

// const App = createStackNavigator({
//   Home: { screen: HomeScreen },
//   SingleGameScreen: { screen: SingleGameScreen },
// });

// export default App;

/*
*首页
* @flow
*/
import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Text, Platform, TouchableOpacity, Image, ImageBackground } from 'react-native';
import AppNavigator from './js/navigation/Router';
import { createStackNavigator, createAppContainer } from "react-navigation";




export default createAppContainer(AppNavigator);