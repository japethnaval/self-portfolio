import React from 'react'
import { InitialPostState } from './state'
import { PostsContext } from '..'
import { usePostsActions } from './actions'

export default ({ children }: { children: React.ReactNode }) => {
    const state = usePostsActions(InitialPostState)
    return <PostsContext.Provider value={state}>{children}</PostsContext.Provider>
}