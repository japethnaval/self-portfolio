import { IAction } from '../../@types/action'
import { IPostState } from './state'
import { SET_POST, ADD_POST, GET_POST } from './constants'

export const reducer = (state: IPostState, action: IAction) => {
  console.log(state, action)
  switch (action.type) {
    case GET_POST:
      return { ...state, pending: true }
    case SET_POST:
      return { ...state, posts: action.payload.data, pending: false }
    case ADD_POST:
      state.posts.push(action.payload)
      return { ...state }
    default:
      return { ...state }
  }
}
