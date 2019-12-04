import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from '../pages/Home';
import Recipe from '../pages/Recipe';
import List from '../pages/List';
import Search from '../pages/Search';
import Barcode from '../pages/Barcode';

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  Search: {
    screen: Search,
  },
  Barcode: {
    screen: Barcode,
  },
  Recipe: {
    screen: Recipe,
  },
  List: {
    screen: List,
  }
}, {
	tabBarOptions: {
    showIcon: true,
    showLabel: false
  }
});

export default createAppContainer(TabNavigator);