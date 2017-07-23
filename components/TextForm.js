import React from 'react';
import { TextInput, TouchableHighlight, View, StyleSheet, Platform, Text } from 'react-native'

export default class TextForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  saveTodo = () => {
    this.props.onSubmit(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.textInput}
          value={this.state.text}
          onChangeText={(text) => this.setState({ text })}
          placeholder={'Write you TODO'}
          onSubmitEditing={this.saveTodo}
        />
        <TouchableHighlight style={styles.button} onPress={this.saveTodo}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    marginTop: 50,
    paddingLeft: 10,
    ...Platform.select({
      ios: {
        borderColor: 'gray',
        borderWidth: 1
      },
    })
  },
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