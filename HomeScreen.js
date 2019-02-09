import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Greeting from './Greeting';
import rootReducer from './reducers/rootReducer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bf0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile Screen',
  };

  render() {
    return (
      <View style={styles.container}>
        <Greeting name="Enter some text below." />
        <Button
          title="Go to Jane's profile"
          onPress={() => this.props.navigation.navigate('Profile', { name: 'Jane' })}
        />
      </View>
    );
  }
}