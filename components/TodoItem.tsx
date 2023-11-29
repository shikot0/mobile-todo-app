import { Pressable, StyleSheet, View, Text } from "react-native";
import Colors from "../constants/Colors";
import { useState } from "react";
import { Todo } from "../app";

type TodoProps = {
    todo: Todo,
    index: number,
    deleteTodo: Function
}


export function TodoItem({todo, index, deleteTodo}: TodoProps) {
    const [isChecked, setIsChecked] = useState(todo.completed);

    return(
        <View style={styles.todoItem}>
            <Text style={styles.todoText}>{todo.text}</Text>
            <Pressable onPress={() => deleteTodo(index)} style={styles.deleteTodoBtn}>
                <Text style={styles.deleteTodoBtnText}>x</Text>
            </Pressable>
        </View>
    ) 
}

const styles = StyleSheet.create({
    todoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: 15,
        borderRadius: 10,
        backgroundColor: Colors.todoItemBG,
    },
    todoText: {
        fontSize: 16,
        maxWidth: '80%',
    },
    deleteTodoBtn: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    deleteTodoBtnText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'darkred',
    }
})