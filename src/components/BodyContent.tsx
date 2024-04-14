import { useContext, useState, useEffect } from 'react';
import Todo from './Todo';
import { TodoContext } from '../contexts/Todos';
import { ContextType, Todo as TodoType } from '../helper/types';

import React from 'react';
import { Reorder } from 'framer-motion';

const BodyContent = ({ todos }: { todos: TodoType[] }) => {
	const [items, setItems] = useState(todos || []);

	const { updateTodos } = useContext(TodoContext) as ContextType;

	// create a useEffect to update the items when the todos change
	useEffect(() => {
		setItems(todos);
	}, [todos]);

	console.log(items);

	return (
		<div className='main-wrapper'>
			<div className='content'>
				<Reorder.Group
					values={items}
					onReorder={(items: TodoType[]) => {
						setItems(items);
						updateTodos(items);
					}}>
					{items.map((item) => {
						return (
							<Reorder.Item value={item} key={item.id}>
								<Todo
									key={item.id}
									text={item.text}
									id={item.id}
									complete={item.completed}
								/>
							</Reorder.Item>
						);
					})}
				</Reorder.Group>
			</div>
		</div>
	);
};

export default BodyContent;
