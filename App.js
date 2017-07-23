import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import TextForm from './components/TextForm';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      todos: ['Todo1', 'Todo2', 'Todo3', 'Todo4', 'Todo5']
    };
  }

  openTodo = () => {    this.setState({text: ''});

    alert('Open Todo');
  }

  saveTodo = (todo) => {
    this.setState({todos: [...this.state.todos, todo]})
  }

  deleteTodo = deletingTodoIndex => {
    const todos = this.state.todos.filter((element, index) => index !== deletingTodoIndex );
    this.setState({todos});
  }

  render() {
    const todoItems = this.state.todos.map((todo, index) => {
      return (
        <View style={styles.todoItemWrapper} key={index}>
          <TouchableHighlight style={styles.todoItem} onPress={this.openTodo}>
              <Text>
                {todo}
              </Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.deleteButton} onPress={() => this.deleteTodo(index)}>
            <Text>Delete</Text>
          </TouchableHighlight>
        </View>
      )
    });

    return (
      <View>
         <TextForm onSubmit={this.saveTodo}/>
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
  todoItem: {
    flex: 1,
    justifyContent: 'center'
  },
  todoItemWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 60,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 2
  },
  todoItemsList: {
    marginTop: 20,
    marginBottom: 40,
  }
});
