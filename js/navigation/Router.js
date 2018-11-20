import { StackNavigator } from 'react-navigation'
import HomeScreen from '../screen/HomeScreen';
import SingleGameScreen from '../screen/SingleGameScreen';

const RootStack = StackNavigator(
  {//定义路由
    Home: {                       //定义Home对应HomeScreen组件
      screen: HomeScreen,
    },
    Details: {
      screen: SingleGameScreen,
    },
  },
  {//定义配置
    initialRouteName: 'Home',     //设置初始路由为Home
  }
);

export default RootStack;