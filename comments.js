// Importing the necessary action's types:

import {ADD_COMMENT} from './actions';
import {REMOVE_COMMENT} from './actions';
import {EDIT_COMMENT} from './actions';
import {THUMB_UP_COMMENT} from './actions';
import {THUMB_DOWN_COMMENT} from './actions';

// Creating a reducer for administrating comments' state

let comments = function comments (state = [], action) {
  swith(action.type) {
    case ADD_COMMENT:
        return  [
            {
                id: action.id,
                text: action.text
                votes: 0
            }
          , ...state.comments]
        })
  })
  case REMOVE_COMMENT:
      return {
          comments: state.comments.filter(comment => comment.id !== action.id)
      };
  case EDIT_COMMENT:
      return {
          comments: state.comments.find(comment => comment.id === action.id),
          comment: {
            text: action.text,
          }
        };
  case THUMB_UP_COMMENT:
      return {
          comments: state.comments.find(comment => comment.id === action.id),
          comment: {
            votes: +1
          }
        };
  case THUMB_DOWN_COMMENT:
      return {
          comments: state.comments.find(comment => comment.id === action.id),
          comment: {
            votes: -1
          }
        };
  default:
      return state;
}

export let comments;
