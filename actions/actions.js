/**
 * These are "action creators" or "action generators".
 */

export const addPost = (body) => {
  return {type: 'ADD_POST', body};
}