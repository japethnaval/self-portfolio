import { useReducer } from 'react'
import axios from 'axios'
import { IPostState } from './state'
import { reducer } from './reducer'

import { SET_POST, GET_POST } from './constants'

export const usePostsActions = (initialState: IPostState) => {
  const [{ posts, pending }, dispatch] = useReducer(reducer, initialState)

  const fetchPosts = async () => {
    try {
      dispatch({ type: GET_POST, payload: null })
      const postsData = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      )
      dispatch({ type: SET_POST, payload: postsData })
    } catch (error) {
      console.error(error)
    }
  }

  return {
    pending,
    posts,
    fetchPosts,
  }
}
