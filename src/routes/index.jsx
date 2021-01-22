import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import MainFirst from '../views/MainFirst';
import MainSecond from '../views/MainSecond';
import MainThird from '../views/MainThird';
import MainLoading from '../views/MainLoading';
import Scanner from '../views/Scanner';
import CardPrice from '../views/CardPrice';

const StackNavigator = createStackNavigator({
  MainFirst: {
  screen: MainFirst,
  navigationOptions: {
    headerShown: false,
    gestureDirection: 'horizontal'
  },
},
MainSecond: {
screen: MainSecond,
navigationOptions: {
  headerShown: false,
  gestureDirection: 'horizontal'
},
},
MainThird: {
screen: MainThird,
navigationOptions: {
  headerShown: false,
  gestureDirection: 'horizontal'
},
},
  Scanner: {
    screen: Scanner,
    navigationOptions: {
      headerShown: false,
    },
  },
  MainLoading: {
    screen: MainLoading,
    navigationOptions: {
      headerShown: false,
    },
  },
  CardPrice: {
    screen: CardPrice,
    navigationOptions: {
      headerShown: false,
    },
  }
},
);
export default createAppContainer(StackNavigator);
