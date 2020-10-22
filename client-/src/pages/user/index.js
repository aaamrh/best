import React, { Component } from 'react';
import {Button, Layout, Menu, Breadcrumb } from 'antd';
import { Link } from "react-router-dom";

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
                <Link to="/navigation" target="_blank"> 私藏的很哇塞的网站 </Link>
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