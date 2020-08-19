import React from 'react'
import { ProfileContainer } from '../containers/Profile'
import { PostsContainer } from '../containers/Posts'
import PostProvider from '../context/Posts'

export default [
  {
    path: '/',
    redirect: true,
    id: 1,
  },
  {
    path: '/profile',
    reactNode: <ProfileContainer />,
    id: 2,
  },
  {
    path: '/posts',
    reactNode: (
      <PostProvider>
        <PostsContainer />
      </PostProvider>
    ),
    id: 3,
  },
]
