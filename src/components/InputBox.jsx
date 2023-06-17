import { useState, useContext } from 'react';
import { TodoContext } from '../contexts/Todos';
import { v4 as uuidv4 } from 'uuid';

const InputBox = () => {
	const [inputVal, setInputval] = useState('');
	const { addTodo } = useContext(TodoContext);
	const handleChange = (e) => {
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
