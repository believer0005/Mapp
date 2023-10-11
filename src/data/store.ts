import { configureStore } from '@reduxjs/toolkit'
import movieSliceReducer from './movieSlice'

export const store = configureStore({
  reducer: {watchList: movieSliceReducer},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch