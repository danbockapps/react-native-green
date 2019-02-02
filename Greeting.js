import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { addPost } from './actions/actions';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: 'App just launched.'};
  }

  _onPressButton = () => this.props.addPost(this.state.text);

  render() {
    return (
      <View>
        <Text>{JSON.stringify(this.props.posts)}</Text>
        <Text>Hello {this.props.name}</Text>
        <TextInput
          style={{height: 40}}
          placeholder="hello world"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text}
        </Text>
        <Button
          onPress={this._onPressButton}
          title="Submit"
        />
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // ownProps are the props as they were sent from App.js (before Redux)
  // You don't have to tack them on to what this fuction returns -
  // they will go into the Component's props anyway.

  // Here we return only the parts of the state that this component needs.
  return {posts: state.posts};
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (body) => {
      dispatch(addPost(body));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);