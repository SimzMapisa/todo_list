import React, { useContext } from 'react';
import BodyContent from './BodyContent';
import { TodoContext } from '../contexts/Todos';
import { ContextType } from '../helper/types';

function ActiveTodos() {
	const { getActiveTodos } = useContext(TodoContext) as ContextType;
	const todos = getActiveTodos();
	console.log(todos);
	return <BodyContent todos={todos} />;
}

export default ActiveTodos;
