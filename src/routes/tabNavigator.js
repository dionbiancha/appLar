import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from '../pages/Home';
import Recipe from '../pages/Recipe';


const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  Recipe: {
    screen: Recipe,
  }
});

export default createAppContainer(TabNavigator);