import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../pages/Login';
import Tutorial from '../pages/Tutorial';
import TabNavigator from './tabNavigator';
import {Churrascometro, ChurrascometroProdutos} from '../pages/churrascometro';
import Product from '../pages/Product';

const StackNavigator = createAppContainer(
  createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: {header: null}
    },
    Tutorial: {
      screen: Tutorial,
      navigationOptions: {header: null}
    },
    TabNavigator: {
      screen: TabNavigator,
      navigationOptions: {header: null}
    },
    Churrascometro: {
      screen: Churrascometro,
      navigationOptions: {header: false}
    },
    ChurrascometroProdutos: {
      screen: ChurrascometroProdutos,
      navigationOptions: {header: false}
    },
    Product: {
      screen: Product,
      navigationOptions: {header: false}
    }    
  })
);

export default StackNavigator; 

