import { MyReduxAction } from "../actions/actions";

const initState: MyReduxState = {
  posts: [
    { body: 'This is the initial state.' }
  ]
}

const rootReducer = (state: MyReduxState = initState, action: MyReduxAction) => {
  if (action.type === 'ADD_POST') {
    return {
      ...state,
      posts: [
        ...state.posts, { body: action.body }
      ]
    }
  }
  return state;
}

export default rootReducer;

export interface MyReduxState {
  posts: Array<{ body: string }>;
}