import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Greeting from './Greeting';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log('State updated.');
  console.log(store.getState());
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Greeting name="Enter some text below."></Greeting>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bf0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});