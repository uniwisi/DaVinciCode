import { createStackNavigator } from 'react-navigation';

import Home from '../screen/HomeScreen';
import SingleGameScreen from '../screen/SingleGameScreen';


const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  SingleGameScreen: {
    screen: SingleGameScreen
  },
});

export default AppNavigator;