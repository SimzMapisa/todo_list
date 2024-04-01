// Create types and export them to be used in the components that need them
export interface Todo {
	id: string;
	text: string;
	completed: boolean;
}

export interface ContextType {
	todos: Todo[];
	toggleComplete: (id: string) => void;
	removeTodo: (id: string) => void;
	addTodo: (todo: Todo) => void;
}

export interface AddTodo {
	(newTodo: Todo): void;
}
