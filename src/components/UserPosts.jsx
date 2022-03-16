import React from 'react'
import PropTypes from 'prop-types'
import { Button, Comment, List, Skeleton } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { useGetPostsByUserIdQuery } from '../stores'

function UserPosts({ id }) {
  const { data, isFetching, isLoading } = useGetPostsByUserIdQuery(id)

  if (isFetching || isLoading) return <Skeleton />

  return (
    <List
      header={`${data.length} posts`}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <li style={{ padding: '0 20px' }}>
          <Comment
            actions={[
              <Button type="text" icon={<EditOutlined />} />,
              <Button type="text" danger icon={<DeleteOutlined />} />,
            ]}
            author={item.title}
            content={item.body}
            style={{ padding: 0 }}
          />
        </li>
      )}
      style={{ backgroundColor: '#ffffff', marginLeft: 10, padding: 5 }}
    />
  )
}

UserPosts.propTypes = {
  id: PropTypes.string.isRequired,
}

export default UserPosts
