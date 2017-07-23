import React from 'react';
import { StyleSheet, View, TouchableHighlight, Text} from 'react-native';

const TodoItem = ({ todo, onEdit, onDelete }) => (
  <View style={styles.todoItemWrapper}>
    <TouchableHighlight style={styles.todoItem} onPress={onEdit}>
      <Text>
        {todo}
      </Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.deleteButton} onPress={onDelete}>
      <Text>Delete</Text>
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  todoItemWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 60,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 2
  },
  todoItem: {
    flex: 1,
    justifyContent: 'center'
  },
  deleteButton: {
    justifyContent: 'center'
  }

})

export default TodoItem;