import { useContext } from 'react';
import BottomNav from './BottomNav';
import InputBox from './InputBox';
import Todo from './Todo';
import { TodoContext } from '../contexts/Todos';

const BodyContent = () => {
	const { todos } = useContext(TodoContext);

	return (
		<div className='main-wrapper'>
			<InputBox className='drag' />
			<div className='content'>
				{todos.map((todo) => {
					return <Todo key={todo.id} text={todo.text} id={todo.id} />;
				})}
				<BottomNav />
			</div>
		</div>
	);
};

export default BodyContent;
