//Importing small reducers from other files and importing an auxiliar funtion comineReducers for combing small reducers into main reducer

import {combineReducers} from 'redux';
import comments from './comments';
import users from './users';

//Defining an initial state

const initialState = {
  comments: [],
  users: []
}

// Main Reducer

export const app = combineReducers({
  comments,
  users
});
