import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const usersApi = createApi({
  reducerPath: 'usersApi',
  tagTypes: ['Users'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: build => ({
    getUsers: build.query({
      query: ({ pagination, sort }) =>
        `users?${
          pagination?.current &&
          `_page=${pagination.current}${
            pagination?.pageSize &&
            `&_limit=${pagination.pageSize}${
              sort ? `&_sort=${sort.columnKey}&_order=${sort.order}` : ''
            }`
          }`
        }`,
      transformResponse: (data, meta) => {
        const count = meta.response.headers.get('X-Total-Count')

        return { records: data, count }
      },
      providesTags: result =>
        result?.data
          ? [
              ...result.data.map(({ id }) => ({ type: 'Users', id })),
              { type: 'Users', id: 'USER_LIST' },
            ]
          : [{ type: 'Users', id: 'USER_LIST' }],
    }),
    getUser: build.query({
      query: id => `users/${id}`,
    }),
    deleteUser: build.mutation({
      query: id => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Users', id: 'USER_LIST' }],
    }),
  }),
})

export default usersApi
export const { useGetUsersQuery, useGetUserQuery, useDeleteUserMutation } = usersApi
