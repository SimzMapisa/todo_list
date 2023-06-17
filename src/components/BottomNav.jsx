import React, { useContext } from 'react';
import { TodoContext } from '../contexts/Todos';

const BottomNav = () => {
	const { todos } = useContext(TodoContext);
	return (
		<>
			<div className='bottom-nav'>
				<h4>{todos.length} items Left</h4>
				<ul>
					<li>All</li>
					<li>Active</li>
					<li>Completed</li>
				</ul>

				<button>Clear Completed</button>
			</div>
		</>
	);
};

export default BottomNav;
