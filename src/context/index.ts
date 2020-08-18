import React from "react"
import { IPostState } from "./Posts/state"


export const PostsContext = React.createContext({} as IPostState)

PostsContext.displayName = 'Posts'