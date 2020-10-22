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
          <Footer style={{ textAlign: 'center' }}>
            <div className="m-foot">
              很哇塞的网站：
              <a href="http://www.ruanyifeng.com/blog" target="_blank"> 阮一峰的个人网站 </a>
              <a href="https://www.zhangxinxu.com" target="_blank"> 张鑫旭 </a>
            </div>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default index;