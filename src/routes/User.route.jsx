import React from 'react'
import { useParams } from 'react-router-dom'
import { PageHeader, Skeleton } from 'antd'
import { useGetUserQuery } from '../stores'

function UserRoute() {
  const { id } = useParams()
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
    />
  )
}

export default UserRoute
