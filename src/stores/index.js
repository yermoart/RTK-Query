import { configureStore } from '@reduxjs/toolkit'
import usersApi from './api/users.api'
import todosApi from './api/todos.api'
import postsApi from './api/posts.api'

const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: getDefaultMiddlware =>
    getDefaultMiddlware().concat([usersApi.middleware, todosApi.middleware, postsApi.middleware]),
})

export default store
export * from './api/users.api'
export * from './api/todos.api'
export * from './api/posts.api'
