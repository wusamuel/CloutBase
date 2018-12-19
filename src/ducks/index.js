import { combineReducers } from 'redux';
import convoList from './convoList';
import convoDetails from './convoDetails';
import messages from './messages';
import currentUser from './currentUser';
import contacts from './contacts';
import ui from './ui'; 

const appReducer = combineReducers({
  convoList,
  convoDetails,
  messages,
  currentUser,
  contacts,
  ui
})

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export default rootReducer;
