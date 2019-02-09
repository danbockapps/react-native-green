/**
 * These are "action creators" or "action generators".
 */

export const addPost = (body: string): MyReduxAction => {
  return { type: 'ADD_POST', body };
}

export interface MyReduxAction {
  type: string;
  body: string;
}