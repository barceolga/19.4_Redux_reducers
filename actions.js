
import uuid from uuid;

//Examples of types of actions and actions' creators  in Redux
const ADD_COMMENT = 'ADD_COMMENT';

export function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
  }
}

const REMOVE_COMMENT = 'REMOVE_COMMENT';

export function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id: comment.id
  }
}

const EDIT_COMMENT = 'EDIT_COMMENT';

export function editComment(id, text) {
  return {
    type: EDIT_COMMENT,
    text,
    id: comment.id
  }
}

const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';

export function thumbUpComment(votes) {
  return {
    type: THUMB_UP_COMMENT.
    votes: +1,
    id: uuid.v4()
  }
}

const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

export function thumbDownComment(votes) {
  return {
    type: THUMB_DOWN_COMMENT,
    votes: -1,
    id: uuid.v4()
  }
}

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
