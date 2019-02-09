import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import Greeting from './Greeting';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bf0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile Screen',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the profile screen.</Text>
      </View>
    );
  }
}