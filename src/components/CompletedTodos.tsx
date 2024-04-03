import React, { useContext } from 'react';
import BodyContent from './BodyContent';
import { TodoContext } from '../contexts/Todos';
import { ContextType } from '../helper/types';

function CompletedTodos() {
	const { getCompletedTodos } = useContext(TodoContext) as ContextType;
	const todos = getCompletedTodos();
	console.log(todos);
	return <BodyContent todos={todos} />;
}

export default CompletedTodos;
