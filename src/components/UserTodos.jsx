import React from 'react'
import PropTypes from 'prop-types'
import { Button, Checkbox, List, Modal, Skeleton } from 'antd'
import { DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import { useGetTodosByUserIdQuery, useDeleteTodoMutation } from '../stores'

function UserTodos({ id }) {
  const { data, isFetching, isLoading } = useGetTodosByUserIdQuery(id)
  const [deleteTodo, deleteTodoMeta] = useDeleteTodoMutation()

  if (isFetching || isLoading) return <Skeleton />

  const handleDeleteConfirm = todoId => {
    const handleDelete = () => deleteTodo(todoId)

    Modal.confirm({
      title: 'Delete this todo?',
      content: 'Are you sure you want to delete this todo?',
      okText: 'Yes',
      cancelText: 'No',
      centered: true,
      icon: <ExclamationCircleOutlined />,
      onOk: handleDelete,
    })
  }

  return (
    <List
      rowKey="id"
      size="small"
      loading={deleteTodoMeta.isLoading}
      dataSource={data}
      renderItem={item => (
        <List.Item
          actions={[
            <Checkbox checked={item.completed}>Completed</Checkbox>,
            <Button
              type="text"
              danger
              icon={<DeleteOutlined />}
              onClick={() => handleDeleteConfirm(item.id)}
            />,
          ]}
        >
          <List.Item.Meta
            title={item.title}
            description={`Record id - ${item.id}, user id - ${id}`}
          />
        </List.Item>
      )}
      style={{ backgroundColor: '#ffffff', marginRight: 10, padding: 5 }}
    />
  )
}

UserTodos.propTypes = {
  id: PropTypes.string.isRequired,
}

export default UserTodos
