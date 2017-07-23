import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import TextForm from './components/TextForm';
import TodoItem from './components/TodoItem';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <TodoItem key={index} todo={todo} onEdit={this.openTodo} onDelete={() => this.deleteTodo(index)}/>
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
  todoItemsList: {
    marginTop: 20,
    marginBottom: 40,
  },
});
