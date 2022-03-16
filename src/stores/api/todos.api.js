import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const todosApi = createApi({
  reducerPath: 'todosApi',
  tagTypes: ['Todos'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: build => ({
    getTodosByUserId: build.query({
      query: userId => `todos?userId=${userId}`,
      providesTags: result =>
        result?.data
          ? [
              ...result.data.map(({ id }) => ({ type: 'Todos', id })),
              { type: 'Todos', id: 'TODO_LIST' },
            ]
          : [{ type: 'Todos', id: 'TODO_LIST' }],
    }),
    deleteTodo: build.mutation({
      query: id => ({
        url: `todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Todos', id: 'TODO_LIST' }],
    }),
  }),
})

export default todosApi
export const { useGetTodosByUserIdQuery, useDeleteTodoMutation } = todosApi
