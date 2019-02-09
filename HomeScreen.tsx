import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import Greeting from './Greeting';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bf0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface HomeScreenProps {
  navigation: NavigationScreenProp<any, any>
};

export default class HomeScreen extends React.Component<HomeScreenProps> {
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