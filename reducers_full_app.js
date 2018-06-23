import {ADD_COMMENT} from './actions';
import {REMOVE_COMMENT} from './actions';
import {EDIT_COMMENT} from './actions';
import {THUMB_UP_COMMENT} from './actions';
import {THUMB_DOWN_COMMENT} from './actions';

//Defining an initial state

const initialState = {
  comments: [],
  users: []
}

//First reducer using ES5 standard
/*
function reducer(state, action) {
  if (!state) {
    return intitalState;
  }
  return state;
}*/

//We can write the same function using ES6 standard in more elegant way defining the default arguments of the function:
// Reducer for administrating the state of the whole aplication:

function reducer (state = initialState, action) {
  swith(action.type) {
    case ADD_COMMENT:
        return Object.assign({}, state {
          comments: [
            {
                id: action.id,
                text: action.text
                votes: 0
            }
          , ...state]
        })
  })
  case REMOVE_COMMENT:
      return Object.assign({}, state, {
          comments: state.comments.filter(comment => comment.id !== action.id)
      });
  case EDIT_COMMENT:
      return Object.assign({}, state {
          comments: state.comments.find(comment => comment.id === action.id),
          comment: {
            id: action.id,
            text: action.text,
            votes: 0
          }
        });
  case THUMB_UP_COMMENT:
      return Object.assign({}, state {
          comments: state.comments.find(comment => comment.id === action.id),
          comment: {
            id: action.id,
            text: action.text,
            votes: +1
          }
        });
  case THUMB_DOWN_COMMENT:
      return Object.assign({}, state {
          comments: state.comments.find(comment => comment.id === action.id),
          comment: {
            id: action.id,
            text: action.text,
            votes: -1
          }
        });
  default:
      return state;
}
