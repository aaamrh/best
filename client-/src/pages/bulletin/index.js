import React, { Component } from 'react';
import { Card, Col, Row, Divider } from 'antd';
import {Redirect, Link} from "react-router-dom";

import '../../css/common.scss'

const { Meta } = Card;

class Bulletin extends Component {

  handleClick = (ev) => {
    // this.props.history.push('/')
    
    console.log(this.props)
    console.log(ev, ev.target)
  }

  render() {
    return (
      <div className="site-card-wrapper container">
        <Row gutter={50}>
          <Col span={6}>
            <Link to="/articles/economy" target="_blank">
              <Card hoverable
                cover={<img alt="" src="/assets/imgs/economy-1.jpg" />}
                onClick={this.handleClick}
              >
                <Meta title="" description="经济" />
              </Card>
            </Link>
          </Col>
          <Col span={6}>
            <Link to="/articles/documentary" target="_blank">
              <Card hoverable
                cover={<img alt="" src="/assets/imgs/movie.jpg" />}
                onClick={this.handleClick}
              >
                <Meta title="" description="纪录片" />
              </Card>
            </Link>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              cover={<img alt="example" src="https://cn.udacity.com/assets/iridium/images/shared/nd-cards/nd009.jpg" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              cover={<img alt="example" src="https://cn.udacity.com/assets/iridium/images/shared/nd-cards/nd578.jpg" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>
        </Row>

        <Divider orientation="left" style={{ color: '#1DA57A' }}>
          知乎万赞
        </Divider>
        <Row gutter={50}>
          <Col span={8}>
            <Card
              hoverable
              cover={<img alt="example" src="https://cn.udacity.com/assets/iridium/images/shared/nd-cards/nd002.jpg" />}
            >
              <Meta title="经济" description="知乎100万赞" />
            </Card>
          </Col>
          <Col span={8}>
            <Card 
              hoverable
              cover={<img alt="example" src="https://cn.udacity.com/assets/iridium/images/shared/nd-cards/nd100-cn-trial.jpg" />}
            >
              <Meta title="娱乐" description="知乎50万赞" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              cover={<img alt="example" src="https://cn.udacity.com/assets/iridium/images/shared/nd-cards/nd009.jpg" />}
            >
              <Meta title="生活" description="知乎20万+赞" />
            </Card>
          </Col>
        </Row>
      
      </div>
    );
  }
}

export default Bulletin;