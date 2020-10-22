import React, { Component } from 'react'
import Axios from 'axios'

import './index.css'

export default class IVideo extends Component {
  constructor(props){
    super(props)
    this.state = {
      externally: ''
    }
  }

  componentDidMount(){
    console.log(this.props.match.params.id)

    Axios.get(`/api/video/${this.props.match.params.id}`)
    .then(res=>{
      console.log(res, res.data.data.externally)
      let externally = res.data.data.externally;

      externally = externally.split('page=1')

      externally = externally[0]+'page=1&&high_quality=1'+externally[1];
      console.log(externally)
      
      this.setState({
        externally
      })
    })

    // var body = iframe.contentWindow.document.body;

    // body.style.marginTop =50;
    // body.style.padding =0;
    // body.style.fontSize =30;
    // body.style.textAlign ='center';
    // body.style.backgroundColor ='red';
    // body.style.color ='blue';
    
  }

  componentDidUpdate(){
    var iframe = document.getElementsByClassName('aaaa')[0].children[0];
    let doc =iframe.contentWindow.document;

    iframe.onload=function(){  
      console.log(123123)
      // let iWindow =iframe.contentWindow;
      // console.log( doc.querySelector('.bilibili-player-video.video-mirror'))
}  

    // setTimeout(() => {    
    // }, 5000)
  }
  render() {
    return (
      <>
        <div className="aaaa" dangerouslySetInnerHTML={{ __html: this.state.externally }}>
        </div>
        {this.state.externally}
        <p></p>
        {/* <iframe src="https://xbeibeix.com/api/bilibili/biliplayer/?url=https://www.bilibili.com/video/BV1H7411y7Hh"></iframe> */}
      </>

    )
  }
}
