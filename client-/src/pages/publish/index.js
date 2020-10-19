import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { Form, Input, Button, InputNumber, Row, Col, Select, message, Checkbox } from 'antd';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import draftToMarkdown from 'draftjs-to-markdown';
import { publish } from '../../redux/article.redux'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './index.css'

const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 22 },
};

class Publish extends Component {
  constructor(props){
    super(props)
    this.state = {
      editorState: EditorState.createEmpty(),
      title : '',
      url : '',
      like : 0,
      mark : 0,
      comment : 0,
      type: 'economy',
      sourceSite: '',
      videoCode: '',
      authorName: '',
      authorAvator: '',
      content: '',
      contentHtml: '',
    };
  }

  // TODO 
  // 发布文章后 loading
  // 发布文章后 消息提示
  onEditorStateChange= (editorState) => {
    this.setState({
      editorState,
    });
  };

  onContentStateChange = (contentState) => { 
    this.setState({
      content: contentState.blocks[0].text
    })
  }

  uploadImageCallBack = (file) => {
    return new Promise(
      (resolve, reject) => {
        const data = new FormData();
        const xhr = new XMLHttpRequest();
        
        data.append('image', file);
        xhr.open('POST', '/api/upload');
        xhr.send(data);

        xhr.addEventListener('load', () => {
          const response = JSON.parse(xhr.responseText);
          resolve(response);
        });
        xhr.addEventListener('error', () => {
          const error = JSON.parse(xhr.responseText);
          reject(error);
        });
      }
    );
  }
  

  onFinish = values => {
    console.log('Success:', values);

    for(let i in values){
      this.setState({
        [i]: values[i]
      })
    }

    this.setState({
      contentHtml: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())),
    })
    
    this.props.publish(this.state)
  };
  

  onCheckBox = (checkedValues) => {
    console.log('checked = ', checkedValues);
  }


  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  componentDidUpdate(){
    // 发布文章后，清空code状态码。 防止多次弹窗
    this.props.state.code=null
  }
  

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          initialValues = {{
            ['like'] : 0,
            ['type'] : [],
            ['mark'] : 0,
            ['comment'] : 0,
            ['sourceSite'] : 'our'
          }}
        >

          <Row gutter={15}>
            <Col span={8}>
              <Form.Item
                label="标题"
                name="title"
                rules={[
                  {
                    required: true,
                    message: '请输入标题',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            
            <Col span={8}>
              <Form.Item
                label="链接"
                name="url"
                rules={[
                  {
                    required: true,
                    message: '请输入链接',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="视频嵌入代码" name="videoCode" >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={15}>
            <Col span={8}>
              <Form.Item
                label="作者头像"
                name="authorAvatar"
                rules={[
                  {
                    required: true,
                    message: '请输入链接',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="作者昵称"
                name="authorName"
                rules={[
                  {
                    required: true,
                    message: '请输入作者昵称',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
        
          <Row>
            <Col span={6}>
              <Form.Item
                label="内容来源"
                name="sourceSite"
                rules={[{ required: true, message: '内容来源' }]}
              >
                <Select placeholder="------"  style={{width: 120}}>
                  <Select.Option value="our">本站</Select.Option>
                  <Select.Option value="bilibili">哔哩哔哩</Select.Option>
                  <Select.Option value="zhihu">知乎</Select.Option>
                  <Select.Option value="douban">豆瓣</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={6} >
              <Form.Item label="点赞数" name="like" >
                <InputNumber min={0} />
              </Form.Item>
            </Col>
            <Col span={6} >
              <Form.Item label="收藏数" name="mark" >
                <InputNumber min={0} />
              </Form.Item>
            </Col>
            <Col span={6} >
              <Form.Item  label="评论数" name="comment" >
                <InputNumber min={0} />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Form.Item
                label="类型"
                name="type"
                rules={[{ required: true, message: '请选择类型' }]}
              >
                {/* <Select placeholder="------"  style={{width: 120}}>
                  <Select.Option value="economy">经济</Select.Option>
                  <Select.Option value="documentary">纪录片</Select.Option>
                </Select> */}

                <Checkbox.Group options={[
                  { label: '经济', value: 'economy' },
                  { label: '纪录片', value: 'documentry' },
                ]} defaultValue={['economy']} onChange={this.onCheckBox} />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>

          <Editor
            editorState={ this.state.editorState }
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={ this.onEditorStateChange }
            onContentStateChange={ this.onContentStateChange }
            toolbar={{
              image: { 
                uploadCallback: this.uploadImageCallBack, 
                previewImage: true, 
                alt: { present: true, mandatory: false } 
              }
            }}
          />

          <textarea disabled
            value={ draftToHtml(convertToRaw(editorState.getCurrentContent())) }
          />
        </Form>
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    state: state.article
  } 
}
function mapDispatchToProps(dispatch){
  return {
    add: ()=> dispatch({type:'add'}),
    // asyncAdd: () => dispatch( ()=>{
    //   setTimeout(() => {
    //     dispatch({type: 'asyncAdd'})
    //   }, 1000)
    // })
  }
}

export default connect( mapStateToProps, { publish } )(Publish);
