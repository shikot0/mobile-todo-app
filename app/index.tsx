import { KeyboardAvoidingView, Platform, Pressable, StatusBar, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import Colors from '../constants/Colors';
import { TodoItem } from '../components/TodoItem';
import { useState } from 'react';
const addTodoIcon = require('../assets/icons/add-todo-icon-2.svg')

export type Todo = {
  text: string,
  completed: boolean
}



export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  function handleAddNewTodo() {
    if(newTodo !== '') {
      setTodos(prev => {
        return [...prev, {text: newTodo, completed: false}]
      })
      setNewTodo('')
    }
  }

  function deleteTodo(index: number) {
    let todosCopy = [...todos];
    todosCopy.splice(index, 1);
    setTodos(todosCopy)
  }

  return (
    <View style={styles.container}>
      <View style={styles.todosWrapper}>
        <Text style={styles.headingText}>Today's Todos</Text>
        <View style={styles.items}>
          {todos.map((todo, index) => {
            return <TodoItem key={index} deleteTodo={deleteTodo} index={index} todo={todo} />
          })}
        </View>
      </View>
      <StatusBar barStyle={'light-content'} translucent/>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.writeTaskWrapper}>
        <TextInput style={styles.textInput} placeholder={'Write a task'} value={newTodo} onChangeText={text => setNewTodo(text)} />
        <Pressable style={styles.addTodoBtn} onPress={handleAddNewTodo}>
          <Text style={styles.addTodoBtnText}>+</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor,
  },
  todosWrapper: {
    flex: 1,
    padding: 20
  },
  items: {
    flex: 1,
    gap: 12,
    paddingVertical: 20,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  writeTaskWrapper: {
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 25,
    width: '100%',
    flex: 1,
    gap: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInput: {
    flexGrow: 1,
    backgroundColor: Colors.inputBG,
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  addTodoBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50, 
    backgroundColor: 'white', 
    borderRadius: 100,
  },
  addTodoBtnText: {
    fontSize: 24
  }
});
