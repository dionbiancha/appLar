import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Home from '../pages/Home';
import Recipe from '../pages/Recipe';
import List from '../pages/List';
import Search from '../pages/Search';
import Barcode from '../pages/Barcode';

const TabNavigator = createMaterialTopTabNavigator({
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
  swipeEnabled: true,
  tabBarPosition: "bottom",
	tabBarOptions: {
    showIcon: true,
    showLabel: false,
    style: {
      backgroundColor: '#ffffff',
    },
    indicatorStyle: {
      backgroundColor: "#FC9191"
    }
  }
});

export default createAppContainer(TabNavigator);