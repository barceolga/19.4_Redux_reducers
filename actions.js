
import uuid from uuid;

//Examples of types of actions in Redux
const ADD_COMMENT = 'ADD_COMMENT';
{
  type: ADD_COMMENT,
  text: 'My first comment'
}

const REMOVE_COMMENT = 'REMOVE_COMMENT';
{
  type: REMOVE_COMMENT,
  id: 15 // it's an exaple of a comment's id to remove
}

const EDIT_COMMENT = 'EDIT_COMMENT';
{
  type: EDIT_COMMENT,
  id: 15,
  text: 'edited text of the comment'
}

const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
{
  type: THUMB_UP_COMMENT,
  votes: +1,
  id: 10 // The id would be useful if an user would like to delete his thumb_up_comment or change it for thumb_down_comment
}

const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
{
  type: THUMB_DOWN_COMMENT,
  votes: -1,
  id: 15
}

// Examples of actions' creators

function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
  }
}

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id: comment.id
  }
}

function editComment(id, text) {
  return {
    type: EDIT_COMMENT,
    text,
    id: comment.id
  }
}

function thumbUpComment(votes) {
  return {
    type: THUMB_UP_COMMENT.
    votes: +1,
    id: uuid.v4()
  }
}

function thumbDownComment(votes) {
  return {
    type: THUMB_DOWN_COMMENT,
    votes: -1,
    id: uuid.v4()
  }
}

//Code for sending an creator

dispatch(addComment('new comment!'));
dispatch(addComment('next new comment!'));

//function for creating and dispatching an acction, all in one!

const boundAddComment = text => dispatch(addComment(text));

boundAddComment('new comment!');
boundAddComment('next new comment!');

const boundRemoveComment = id => dispatch(removeComment(id));
boundRemoveComment(10);

const boundEditComment = (id, text) => dispatch(editComment(id, text));
boundEditComment(10, 'this is edited comment');

const boundThumbUpComment = value => disptach(thumbUpComment(value));
boundThumbUpComment(+1);

const boundThumbDownComment = value => disptach(thumbDownComment(value));
boundThumbDownComment(-1);

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
