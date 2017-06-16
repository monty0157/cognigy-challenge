import { combineReducers } from 'redux';

import { messageReducer } from './messageReducer';

const Reducers = combineReducers({
  messageReducer,
});

export default Reducers;
