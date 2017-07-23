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

  saveTodo = () => {
    this.setState({text: ''});
    this.setState({todos: [...this.state.todos, this.state.text]})
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
          onSubmitEditing={this.saveTodo}
        />
        <TouchableHighlight style={styles.button} onPress={this.saveTodo}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
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
    marginBottom: 40,
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
});
