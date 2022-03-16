import React from 'react'
import PropTypes from 'prop-types'
import { Descriptions, PageHeader, Skeleton } from 'antd'
import { useGetUserQuery } from '../stores'

function UserHeader({ id }) {
  const { data, isFetching, isLoading } = useGetUserQuery(id)

  if (isFetching || isLoading) return <Skeleton />

  return (
    <PageHeader
      className="site-page-header"
      onBack={() => {
        const { key } = window.history.state

        if (!key) window.location.href = '/'

        window.history.back()
      }}
      title={data.name}
      style={{ backgroundColor: '#ffffff' }}
    >
      <Descriptions size="small">
        <Descriptions.Item label="Name">{data.name}</Descriptions.Item>
        <Descriptions.Item label="Username">{data.username}</Descriptions.Item>
        <Descriptions.Item label="Website">{data.website}</Descriptions.Item>
        <Descriptions.Item label="Email">{data.email}</Descriptions.Item>
        <Descriptions.Item label="Phone">{data.phone}</Descriptions.Item>
        <Descriptions.Item label="Address">
          City: {data.address.city}
          <br />
          City: {data.address.street}
          <br />
          City: {data.address.suite}
          <br />
          Zipcode: {data.address.zipcode}
        </Descriptions.Item>
      </Descriptions>
    </PageHeader>
  )
}

UserHeader.propTypes = {
  id: PropTypes.string.isRequired,
}

export default UserHeader
