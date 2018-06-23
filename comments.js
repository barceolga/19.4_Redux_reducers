// Importing the necessary action's types:

import {ADD_COMMENT} from './actions';
import {REMOVE_COMMENT} from './actions';
import {EDIT_COMMENT} from './actions';
import {THUMB_UP_COMMENT} from './actions';
import {THUMB_DOWN_COMMENT} from './actions';
import addComment from './actions';
import removeComment from './actions';
import editComment from './actions';
import thumbUpComment from './actions';
import thumbDownComment from './actions';

// Creating a reducer for administrating comments' state

export default function comments (state = [], action) {
    switch(action.type) {
      case ADD_COMMENT:
          return  [
              {
                  id: action.id,
                  text: action.text,
                  votes: 0
              }
            , ...state.comments]
    case REMOVE_COMMENT:
        return  state.comments.filter(comment => comment.id !== action.id);
    case EDIT_COMMENT:
        return  state.comments.find(comment => comment.id === action.id).concat([comment.id, action.text]);
    case THUMB_UP_COMMENT:
        return state.comments.find(comment => comment.id === action.id).concat([comment.id, action.votes +1]);

    case THUMB_DOWN_COMMENT:
        return  state.comments.find(comment => comment.id === action.id).concat([comment.id,action.votes -1]);
    default:
        return state;
    }
}
