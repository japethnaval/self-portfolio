import React, { useEffect } from 'react'

import PostProvider from './context/Posts'

import './App.css'
import { PostsContainer } from './containers/Posts'


const App = () => {

  useEffect(() => {
    
  })

  return (
    <PostProvider>
      <PostsContainer/>
    </PostProvider>
  )
}


export default App
