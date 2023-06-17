import { createContext, useState } from 'react';
import Todo from '../components/Todo';

export const TodoContext = createContext();

export const ContextProvider = ({ children }) => {
	const [todos, setTodos] = useState([]);

	// Function to add todos
	const addTodo = (newTodo) => {
		if (!newTodo.text) return;
		setTodos([newTodo, ...todos]);
	};
	// Function to delete a todo item
	const removeTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	// Function to toggle complete todo

	const toggleComplete = (id) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed: !todo.completed };
				}
				return todo;
			})
		);
	};

	return (
		<TodoContext.Provider
			value={{ todos, toggleComplete, removeTodo, addTodo }}
		>
			{children}
		</TodoContext.Provider>
	);
};
