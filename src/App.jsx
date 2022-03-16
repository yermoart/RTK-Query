import React from 'react'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import { Layout, Typography } from 'antd'
import getRoutes from './config/routes'
import 'antd/dist/antd.css'

const { Header, Content } = Layout
const { Title } = Typography

function AppRouter() {
  const routes = getRoutes()

  return useRoutes(routes)
}

function App() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <Title level={2} style={{ color: 'white', marginBottom: 0 }}>
            RTK Query
          </Title>
        </Header>
        <Content style={{ padding: '20px' }}>
          <AppRouter />
        </Content>
      </Layout>
    </Router>
  )
}

export default App
