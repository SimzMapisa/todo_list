import React, { useContext } from 'react';
import { TodoContext } from '../contexts/Todos';
import { ContextType } from '../helper/types';
import { Link } from 'react-router-dom';

const BottomNav = () => {
	const { todos, getCompletedTodos, clearCompleted } = useContext(
		TodoContext
	) as ContextType;
	const completedTodos = getCompletedTodos();

	return (
		<>
			<div className='bottom-nav'>
				<h4>{todos.length - completedTodos.length} items Left</h4>
				<ul>
					<Link to='/'>All</Link>
					<Link to='/active'>Active</Link>
					<Link to='/completed'>Completed</Link>
				</ul>

				<button onClick={clearCompleted}>Clear Completed</button>
			</div>
		</>
	);
};

export default BottomNav;
