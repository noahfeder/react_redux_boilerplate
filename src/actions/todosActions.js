import {EDIT_TODO_TEXT, CREATE_TODO} from '../constants/todosConstants';
import cuid from 'cuid';

export const editTodoText = (todoId, todo_text) => ({
    type: EDIT_TODO_TEXT,
    todoId,
    todo_text
});

export const createTodo = todo_text => ({
    type: CREATE_TODO,
    todoId: cuid(),
    todo_text
});
