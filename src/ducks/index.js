import { combineReducers } from 'redux';
import convos from './convos';
import convoMessages from './convoMessages'; 

const appReducer = combineReducers({
  convos,
  convoMessages,
})

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export default rootReducer;
