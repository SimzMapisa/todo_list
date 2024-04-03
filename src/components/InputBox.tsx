import { useState, useContext } from 'react';
import { TodoContext } from '../contexts/Todos';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';

interface Todo {
	id: string;
	text: string;
	completed: boolean;
}

interface ContextType {
	todos: Todo[];
	toggleComplete: (id: string) => void;
	removeTodo: (id: string) => void;
	addTodo: (todo: Todo) => void;
}

const InputBox = () => {
	const { addTodo } = useContext(TodoContext) as ContextType;
	const [inputVal, setInputval] = useState('');
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputval(e.target.value);
	};

	const newTodo = {
		id: uuidv4(),
		text: inputVal,
		completed: false,
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(newTodo);
		setInputval('');
	};

	return (
		<div className='form-wrapper'>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					onChange={handleChange}
					name='todo'
					value={inputVal}
					placeholder='Create a new todo'
					autoComplete='off'
				/>
			</form>
		</div>
	);
};

export default InputBox;
