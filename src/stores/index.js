import { configureStore } from '@reduxjs/toolkit'
import usersApi from './api/users.api'

const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: getDefaultMiddlware => getDefaultMiddlware().concat(usersApi.middleware),
})

export default store
export * from './api/users.api'
