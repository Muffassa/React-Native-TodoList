import React from 'react';
import { StyleSheet, Platform, Text, TextInput, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <TextInput style={styles.textInput} value={this.state.text}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  }
});
