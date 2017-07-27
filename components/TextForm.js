import React from 'react';
import {
  TextInput,
  TouchableHighlight,
  View,
  StyleSheet,
  Platform,
  Text
} from 'react-native';

import FormInput from './FormInput.js';

export default class TextForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  saveTodo = (text) => {
    this.props.onSubmit(text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <View>
        <FormInput
          value={this.state.value}
          onChangeText={text => this.setState({text})}
          placeholder={'Write you TODO'}
          onSubmitInput={() => this.saveTodo(this.state.text)}
        />
        <TouchableHighlight style={styles.button} onPress={() => this.saveTodo(this.state.text)}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: 'green',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff"
  }
})