
/*jshint esversion: 6*/
// Importing the necessary action's types:
import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  EDIT_COMMENT,
  THUMB_UP_COMMENT,
  THUMB_DOWN_COMMENT,
} from './actions';

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
            , ...state.comments];

    case REMOVE_COMMENT:
        return  state.comments.filter(comment => comment.id !== action.id);

    case EDIT_COMMENT:
        const editedComments =  state.comments.map(comment => {
            if(comment.id === action.id) {
                text = action.text
            }
              return comment;
        });
        return editedComments;

    case THUMB_UP_COMMENT:
        const upvotedComments = state.comments.map(comment => {
            if(comment.id === action.id) {
              comment.votes++
            }
              return comment;
        });
        return upvotedComments;

    case THUMB_DOWN_COMMENT:
        const downvotedComments = state.comments.map(comment => {
            if(comment.id === action.id) {
              comment.votes--
            }
              return comment;
        });
        return downvotedComments;

    default:
        return state;
    }
}
