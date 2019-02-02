const initState = {
  posts: [
    {body: 'This is the initial state.'}
  ]
}

const rootReducer = (state = initState, action) => {
  if(action.type === 'ADD_POST') {
    return {
      ...state,
      posts: [
        ...state.posts, {body: action.body}
      ]
    }
  }
  return state;
}

export default rootReducer;