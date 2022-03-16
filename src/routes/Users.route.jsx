import React, { useState } from 'react'
import { Button, Modal, Table } from 'antd'
import { DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import { useGetUsersQuery, useDeleteUserMutation } from '../stores'
import getUsersColumns from '../config/columns'

function UsersRoute() {
  const [requestParams, setRequestParams] = useState({
    pagination: { current: 1, pageSize: 5 },
    sort: null,
  })
  const { data, isFetching, isLoading } = useGetUsersQuery(requestParams)
  const [deleteUser, deleteMeta] = useDeleteUserMutation()

  const handleChange = (pagination, _, sorter, extra) => {
    if (extra.action === 'paginate') setRequestParams({ ...requestParams, pagination })
    if (extra.action === 'sort') {
      const order = sorter.order
        ? { columnKey: sorter.columnKey, order: sorter.order === 'ascend' ? 'asc' : 'desc' }
        : null

      setRequestParams({ ...requestParams, order })
    }
  }

  const handleDeleteConfirm = id => {
    const handleDelete = () => deleteUser(id)

    Modal.confirm({
      title: 'Delete this user?',
      content: 'Are you sure you want to delete this user?',
      okText: 'Yes',
      cancelText: 'No',
      centered: true,
      icon: <ExclamationCircleOutlined />,
      onOk: handleDelete,
    })
  }

  const actionsColumn = {
    key: 'actions',
    dataIndex: '',
    align: 'center',
    render: (_, record) => (
      <Button
        type="text"
        danger
        icon={<DeleteOutlined />}
        onClick={() => handleDeleteConfirm(record.id)}
      />
    ),
  }

  const columns = getUsersColumns().concat(actionsColumn)

  return (
    <Table
      rowKey="id"
      size="small"
      columns={columns}
      loading={isFetching || isLoading || deleteMeta.isLoading}
      dataSource={data?.records}
      pagination={{ ...requestParams.pagination, total: data?.count }}
      onChange={handleChange}
    />
  )
}

export default UsersRoute
