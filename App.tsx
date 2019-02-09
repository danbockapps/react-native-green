import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log('State updated.');
  console.log(store.getState());
});

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen }
  },
  {
    initialRouteName: "Home"
  }
)

const AppContainer = createAppContainer(AppNavigator)

// This page says export this instead of putting export on the line above:
// https://reactnavigation.org/docs/en/hello-react-navigation.html
export default class App extends React.Component {
  render() {
    return <Provider store={store}><AppContainer /></Provider>;
  }
}