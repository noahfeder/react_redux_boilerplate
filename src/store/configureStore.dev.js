import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';
import DevTools from '../containers/devTools';

const logger = createLogger();

const finalCreateStore = compose(
  // Middleware you want to use in development:
  applyMiddleware(logger),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
)(createStore);

export default initialState => {
  const store = finalCreateStore(
    rootReducer,
    initialState
  );

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    );
  }

  return store;
}