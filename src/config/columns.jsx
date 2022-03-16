import React from 'react'
import { Link } from 'react-router-dom'

const getUsersColumns = () => [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    align: 'center',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    sorter: true,
    render: (text, record) => <Link to={`/${record.id}`}>{text}</Link>,
  },
  {
    title: 'Address',
    key: 'address',
    children: [
      {
        title: 'City',
        dataIndex: ['address', 'city'],
        key: 'city',
        align: 'center',
      },
      {
        title: 'Street',
        dataIndex: ['address', 'street'],
        key: 'street',
        align: 'center',
      },
      {
        title: 'Suite',
        dataIndex: ['address', 'suite'],
        key: 'suite',
        align: 'center',
      },
      {
        title: 'Zipcode',
        dataIndex: ['address', 'zipcode'],
        key: 'zipcode',
        align: 'center',
      },
    ],
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
    align: 'center',
    sorter: true,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    align: 'center',
  },
]

export default getUsersColumns
