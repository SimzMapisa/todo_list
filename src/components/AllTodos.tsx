import React, { useContext } from 'react';
import BodyContent from './BodyContent';
import { TodoContext } from '../contexts/Todos';
import { ContextType } from '../helper/types';

function AllTodos() {
	const { todos } = useContext(TodoContext) as ContextType;
	console.log(todos);
	return <BodyContent todos={todos} />;
}

export default AllTodos;
