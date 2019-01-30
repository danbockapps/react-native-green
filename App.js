import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: 'App just launched.'};
  }

  render() {
    return (
      <View>
        <Text>Hello {this.props.name}</Text>
        <TextInput
          style={{height: 40}}
          placeholder="hello world"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text}
        </Text>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Greeting name="Enter some text below."></Greeting>
      </View>
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
