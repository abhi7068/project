import { reducer, loginReducer, userReducer } from './reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  events: reducer,
  users: userReducer,
  userDetails: loginReducer,
});
export default rootReducer;
