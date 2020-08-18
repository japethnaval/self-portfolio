export interface IPost {
  userId: number
  id: number
  title?: string
  body?: string
}

export interface IPostState {
  fetchPosts(): Promise<void>
  posts: IPost[]
  pending: boolean
}

export const InitialPostState: IPostState = {
  posts: [],
  pending: false,
  fetchPosts: () => Promise.resolve(),
}
