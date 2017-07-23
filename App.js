import React from 'react';
import {
  StyleSheet,
  Platform,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      todos: ['Todo1', 'Todo2', 'Todo3', 'Todo4', 'Todo5']
    };
  }

  openTodo = () => {
    alert('Open Todo');
  }

  render() {
    const todoItems = this.state.todos.map((todo, index) => {
      return (
        <TouchableHighlight key={index} style={styles.todoItem} onPress={this.openTodo}>
          <Text>
            {todo}
          </Text>
        </TouchableHighlight>
      )
    });

    return (
      <View>
        <TextInput
          style={styles.textInput}
          value={this.state.text}
          onChangeText={(text) => this.setState({ text })}
          placeholder={'Write you TODO'}
        />
        <Text>
          {this.state.text}
        </Text>
        <ScrollView style={styles.todoItemsList}>
          {todoItems}
        </ScrollView>
      </View>
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
  },
  todoItem: {
    height: 60,
    paddingLeft: 20,
    justifyContent: 'center',
    marginTop: 2
  },
  todoItemsList: {
    marginTop: 20,
  }
});
