import { combineReducers } from 'redux';
import convoList from './convoList';
import convoDetails from './convoDetails';
import messages from './messages';
import currentUser from './currentUser';

const appReducer = combineReducers({
  convoList,
  convoDetails,
  messages,
  currentUser
})

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export default rootReducer;
