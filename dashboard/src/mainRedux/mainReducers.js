import { combineReducers } from 'redux';

import { messageReducer } from '../components/chat/redux/reducers';

const Reducers = combineReducers({
  messageReducer,
});

export default Reducers;
