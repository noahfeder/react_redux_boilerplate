import {Map, fromJS} from 'immutable';

import todo_reducer from './todo';

import {EDIT_TODO_TEXT, CREATE_TODO, TOGGLE_TODO_COMPLETED_STATE} from '../constants/todosConstants';

const initial_state = fromJS({
  'new_todo': {
    text: '',
    is_complete: false
  }
});

const todos = (state = initial_state, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return state
        .set(action.todo_id, Map({
          text: action.todo_text,
          is_complete: false
        })).set('new_todo', Map({
          text: '',
          is_complete: false
        }));
    case EDIT_TODO_TEXT:
    case TOGGLE_TODO_COMPLETED_STATE:
      return action.todo_id && state.get(action.todo_id) ?
        state.update(action.todo_id, todo => todo_reducer(todo, action)) :
        state;
    default:
      return state;
  }
};

export default todos;
