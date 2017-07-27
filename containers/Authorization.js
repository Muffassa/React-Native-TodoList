import React from 'react'
import { View, TouchableHighlight, TextInput, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Authorization extends React.Component {
  render() {
    return (
      <View style={styles.container} onPress={() => Actions.todolist()}>
        <TextInput
          placeholder={'Login'}
        />
        <TextInput
          placeholder={'Password'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})