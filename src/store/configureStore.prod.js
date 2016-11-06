import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initial_state) {
  return createStore(rootReducer, initial_state);
}
