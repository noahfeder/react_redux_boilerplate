import {Map} from 'immutable';

import {EDIT_TODO_TEXT, TOGGLE_TODO_COMPLETED_STATE} from '../constants/todosConstants';


const initial_state = Map({});

export default (state = initial_state, action) => {
  switch (action.type) {
    case EDIT_TODO_TEXT:
      return state.set('text', action.todo_text);
    case TOGGLE_TODO_COMPLETED_STATE:
      return state.set('is_complete', !state.get('is_complete'));
    default:
      return state;
  }
};
