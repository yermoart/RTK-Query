import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: build => ({
    getPostsByUserId: build.query({
      query: userId => `posts?userId=${userId}`,
    }),
  }),
})

export default postsApi
export const { useGetPostsByUserIdQuery } = postsApi
