import {
  createStore,
  compose,
  applyMiddleware,
  Middleware,
  Store,
  Action,
} from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/authReducer';

export const devtoolsCompose =
  // eslint-disable-next-line
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  // eslint-disable-next-line
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    trace: true,
    traceLimit: 25,
  });
const composeEnhancers = devtoolsCompose || compose;

const middlewares: Middleware[] = [thunk];

export default function configureStore() {
  const store: Store<any> = createStore<any, Action, unknown, unknown>(
    authReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  return store;
}
