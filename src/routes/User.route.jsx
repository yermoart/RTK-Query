import React from 'react'
import { useParams } from 'react-router-dom'
import { Col, Row, Typography } from 'antd'
import UserHeader from '../components/UserHeader'
import UserTodos from '../components/UserTodos'
import UserPosts from '../components/UserPosts'

const { Title } = Typography

function UserRoute() {
  const { id } = useParams()

  return (
    <>
      <UserHeader id={id} />
      <Row style={{ marginTop: 20 }}>
        <Col span={12}>
          <Title level={3}>Todo list</Title>
          <UserTodos id={id} />
        </Col>
        <Col span={12}>
          <Title level={3} style={{ marginLeft: 10 }}>
            Posts
          </Title>
          <UserPosts id={id} />
        </Col>
      </Row>
    </>
  )
}

export default UserRoute
