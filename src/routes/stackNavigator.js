import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Reducers from '../Reducers';

import Login from '../pages/Login';
import Tutorial from '../pages/Tutorial';
import TabNavigator from './tabNavigator';
import {Churrascometro, ChurrascometroProdutos} from '../pages/churrascometro';
import Product from '../pages/Product';
import ListItem from '../pages/ListItem';

let store = createStore(Reducers, applyMiddleware(ReduxThunk));

const Stack = createAppContainer(
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
    },
    ListItem: {
      screen: ListItem
    }   
  })
);

export default class Container extends Component {
  render() {
    return(
      <Provider store={store}>
        <Stack />
      </Provider>
    );
  }
}

