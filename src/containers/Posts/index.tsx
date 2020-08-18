import React, { useContext, useEffect } from 'react'
import { PostsContext } from '../../context'

export const PostsContainer = () => {
  const { posts, fetchPosts, pending } = useContext(PostsContext)

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return <div>{pending ? 'Loading...' : JSON.stringify(posts)}</div>
}
