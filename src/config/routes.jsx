import React from 'react'
import UsersRoute from '../routes/Users.route'
import UserRoute from '../routes/User.route'

const getRoutes = () => [
  {
    key: 'users-route',
    path: '/',
    element: <UsersRoute />,
  },
  {
    key: 'user-route',
    path: '/:id',
    element: <UserRoute />,
  },
]

export default getRoutes
