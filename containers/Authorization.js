import React from 'react'
import { Text, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Authorization extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress={() => Actions.todolist()}>
        <Text>
          Test Text
        </Text>
      </TouchableHighlight>
    );
  }
}