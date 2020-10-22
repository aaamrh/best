import React, { Component } from 'react';
import {Button, Layout, Menu, Breadcrumb } from 'antd'
import '../../css/common.scss'
import './index.scss'


const { Header, Content, Footer } = Layout;


class index extends Component {
  render() {
    return (
      <div>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              {/* <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item> */}
            </Menu>
          </Header>
          <Content style={{ padding: '50px 50px 0' }}>
            <div className="site-layout-content">
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>© 2020</Footer>
        </Layout>
      </div>
    );
  }
}

export default index;