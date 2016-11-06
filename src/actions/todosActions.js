import {EDIT_TODO_TEXT, CREATE_TODO, TOGGLE_TODO_COMPLETED_STATE} from '../constants/todosConstants';
import cuid from 'cuid';

export const edit_todo_text = (todo_id, todo_text) => ({
    type: EDIT_TODO_TEXT,
    todo_id,
    todo_text
});

export const create_todo = todo_text => ({
    type: CREATE_TODO,
    todo_id: cuid(),
    todo_text
});

export const toggle_todo_completed_state = todo_id => ({
    type: TOGGLE_TODO_COMPLETED_STATE,
    todo_id
});
