//Importing small reducers from other files and importing an auxiliar funtion comineReducers for combing small reducers into main reducer

import {combineReducers} from 'redux';
import comments from './comments';
import users from './users';

//Using the combineReducers function to combine the two small reducers

const app = combineReducers({
  comments,
  users
});

//Defining an initial state

const initialState = {
  comments: [],
  users: []
}

// Main Reducer

function app(state = initialState, action) {
  return{
    comments: comments(state.comments, action),
    users: users(state.users, action)
  };
}
