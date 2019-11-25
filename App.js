import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './src/pages/Login';
import Tutorial from './src/pages/Tutorial';

const App = createAppContainer(
  createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: {header: null}
    },
    Tutorial: {
      screen: Tutorial,
      navigationOptions: {header: null}
    }
  })
);

export default App; 

