import { createContext, useState } from 'react';
import React from 'react';
import Todo from '../components/Todo';
import { Todo as TodoType, ContextType, AddTodo } from '../helper/types';

// Create the context and export it to be used in the components that need it

export const TodoContext = createContext<ContextType | undefined>(undefined);

export const ContextProvider = ({ children }) => {
	// Get the todos from the local storage
	const savedTodos = localStorage.getItem('todos');

	// Check if there are todos in the local storage
	const initialTodos = savedTodos ? JSON.parse(savedTodos) : [];

	// Set the initial state of the todos
	const [todos, setTodos] = useState<TodoType[]>(initialTodos);

	// Get the completed todos from the local storage
	const getCompletedTodos = () => {
		return todos.filter((todo) => todo.completed);
	};

	const getActiveTodos = () => {
		return todos.filter((todo) => todo.completed === false);
	};

	console.log(getActiveTodos());

	// Save todos in the local storage
	const saveTodos = (todos: TodoType[]) => {
		localStorage.setItem('todos', JSON.stringify(todos));
	};

	// Save the todos in the local storage every time the todos change
	saveTodos(todos);

	// Function to add todos
	const addTodo: AddTodo = (newTodo: TodoType) => {
		newTodo.text ? setTodos([newTodo, ...todos]) : null;
	};

	// Function to delete a todo item
	const removeTodo = (id: string) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const updateTodos = (newTodos: TodoType[]) => {
		setTodos(newTodos);
	};

	// clear completed todos
	const clearCompleted = () => {
		setTodos(todos.filter((todo) => todo.completed === false));
	};

	// Function to toggle complete todo

	const toggleComplete = (id: string) => {
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
			value={{
				todos,
				toggleComplete,
				removeTodo,
				addTodo,
				updateTodos,
				getCompletedTodos,
				getActiveTodos,
				clearCompleted,
			}}>
			{children}
		</TodoContext.Provider>
	);
};
