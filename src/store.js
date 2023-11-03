import { createStore, combineReducers } from 'redux';

import appReducer from './redux/reducers';

const rootReducer = combineReducers({
  app: appReducer,
});

const store = createStore(rootReducer);

export default store;
