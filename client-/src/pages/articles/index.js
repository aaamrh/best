import React, { Component } from 'react';
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { articles } from '../../redux/article.redux';
import axios from 'axios';


const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

class Articles extends Component {
  constructor(props){
    super(props)
    this.state = {
      type: '',
      listData: []
    }
  }
  componentDidMount(){
    this.setState({
      type: this.props.match.params.type
    })

    
    axios.get('/api/articles/' + this.props.match.params.type)
    .then(res=>{
      console.log(res)
      const data = res.data.data;
      const { listData } = this.state;

      for (let i = 0; i < data.length; i++) {
        let content = data[i].content;
        if(content.replace(/\s+/g, "") === '<p></p>'){
          content = ''
        }else{
          content = content.substr(0,180).replace(/<[a-z]+>|<\/[a-z]+>|&nbsp;|&lt;\/[a-z]+&gt;|&lt;[a-z]+&gt;/g,  '') + '...'
        };

        listData.push({
          id: data[i]._id,
          href: data[i].url,
          title: data[i].title,
          like: data[i].like,
          mark: data[i].mark,
          comment: data[i].comment,
          avatar: data[i].author_avatar,
          description: data[i].author_name,
          content: content,
          sourceSite: data[i].sourceSite,
          externally: data[i].externally
        });
      }

      this.setState({
        listData: listData
      })
    })
  }

  render() {
    return (
      <div  className="container" style={{backgroundColor: '#fff'}}>
        <List
          itemLayout="vertical"
          size="large"
          style={{padding: '20px 10px'}}
          // pagination={{
          //   onChange: page => {
          //     console.log(page);
          //   },
          //   pageSize: 4,
          // }}
          dataSource={this.state.listData}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={[
                <IconText icon={StarOutlined} text={item.mark} key="list-vertical-star-o" />,
                <IconText icon={LikeOutlined} text={item.like} key="list-vertical-like-o" />,
                <IconText icon={MessageOutlined} text={item.comment} key="list-vertical-message" />,
              ]}
              // extra={
              //   <img
              //     width={272}
              //     alt="logo"
              //     src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              //   />
              // }
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={ <a href={ item.externally ? `/video/${item.id}` : item.href }>{ item.title }</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    counter: state.article
  }
}


export default connect( mapStateToProps, { articles } )(Articles);

// export default Articles;