import { useContext, useState } from 'react';
import BottomNav from './BottomNav';
import InputBox from './InputBox';
import Todo from './Todo';
import { TodoContext } from '../contexts/Todos';
import { ContextType } from '../helper/types';

import React from 'react';
import { Reorder } from 'framer-motion';

const BodyContent = () => {
	const { todos } = useContext(TodoContext) as ContextType;
	const [items, setItems] = useState(todos);

	// create a useEffect to update the items when the todos change
	React.useEffect(() => {
		setItems(todos);
	}, [todos]);

	return (
		<div className='main-wrapper'>
			<InputBox className='drag' />
			<div className='content'>
				<Reorder.Group values={items} onReorder={setItems}>
					{items.map((item) => {
						return (
							<Reorder.Item value={item} key={item.id}>
								<Todo key={item.id} text={item.text} id={item.id} />;
							</Reorder.Item>
						);
					})}
				</Reorder.Group>
				<BottomNav />
			</div>
		</div>
	);
};

export default BodyContent;
