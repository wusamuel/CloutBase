import { combineReducers } from 'redux';
import convoList from './convoList';
import convoDetails from './convoDetails';
import messages from './messages';
import currentUser from './currentUser';
import contacts from './contacts'; 

const appReducer = combineReducers({
  convoList,
  convoDetails,
  messages,
  currentUser,
  contacts
})

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export default rootReducer;
