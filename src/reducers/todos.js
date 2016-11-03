import {Map, fromJS} from 'immutable';

import {EDIT_TODO_TEXT, CREATE_TODO} from '../constants/todosConstants'

const initialState = fromJS({
  'new_todo': {
    text: '',
    completed: false
  }
});

const todos = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_TODO_TEXT:
      return state.setIn([action.todoId, 'text'], action.todo_text);
    case CREATE_TODO:
      return state
        .set(action.todoId, Map({
          text: action.todo_text,
          completed: false
        })).set('new_todo', Map({
          text: '',
          completed: false
        }));
    default:
      return state;
  }
}

export default todos;