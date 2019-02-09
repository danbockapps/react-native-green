import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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