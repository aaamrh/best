import React, { Component } from 'react'

import './index.scss'

export default class Navigation extends Component {
  render() {
    return (
      <div className="m-nav">
        <div className='nav-notice'>在学习的过程中收集了一些优秀的网址，分享给大家，希望能给大家带来一点点的便利。（也欢迎大家提供优秀网址）</div>

        <div className='nav-wrap'>
          <div className='domain'>学习网站</div>

          <div className="nav-list f-clearfix">
            <div className='subject'>视频教程</div>
            <ul className='navs'>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="http://open.163.com/">网易公开课</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://study.163.com/">网易云课堂</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://www.imooc.com/">慕课网</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://www.miaov.com/">妙味课堂</a></li>
            </ul>
          </div>

          <div className="nav-list f-clearfix">
            <div className='subject'>资讯</div>
            <ul className='navs'>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="http://www.woshipm.com/">人人都是产品经理</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://36kr.com/">36氪</a></li>
            </ul>
          </div>
        </div>

        <div className='nav-wrap'>
          <div className='domain'>社区/博客</div>

          <div className="nav-list f-clearfix">
            <div className='subject'>社区</div>
            <ul className='navs'>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://developer.mozilla.org/zh-CN/">MDN</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://juejin.im/welcome/frontend">掘金</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://www.qdfuns.com/">前端网</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="http://www.jobbole.com/">伯乐在线</a></li>
            </ul>
          </div>

          <div className="nav-list f-clearfix">
            <div className='subject'>博客</div>
            <ul className='navs'>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://www.zhangxinxu.com/">张鑫旭</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="http://www.ruanyifeng.com/blog/">阮一峰</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://www.liaoxuefeng.com/">廖雪峰</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://www.cnblogs.com/TomXu/archive/2011/12/15/2288411.html">汤姆大叔</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="http://ghmagical.com/">TG</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="http://bonsaiden.github.io/JavaScript-Garden/zh/#function.closures/">JavaScript秘密花园</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://www.wjceo.com/">暮志未晚(Threejs)</a></li>
            </ul>
          </div>
        </div>

        <div className='nav-wrap'>
          <div className='domain'>前端进阶</div>

          <div className="nav-list f-clearfix">
            <div className='subject'>JS</div>
            <ul className='navs'>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://github.com/dreamapplehappy/effective-javascript">Effective JavaScript</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://segmentfault.com/a/1190000012646488">前端进阶目录</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://www.cnblogs.com/TomXu/archive/2011/12/15/2288411.html">深入理解JavaScript</a></li>
            </ul>
          </div>
        </div>

        <div className='nav-wrap'>
          <div className='domain'>实用工具</div>

          <div className="nav-list f-clearfix">
            <div className='subject'>工具</div>
            <ul className='navs'>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://tinypng.com/">tinypng(图片压缩)</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://caniuse.com/#home">caniuse(查询css, js兼容性)</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://developers.google.com/speed/pagespeed/insights/">pagespeed(网站性能分析)</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://jsbin.com/?html,css,output">JS Bin(方便别人调试你的代码)</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://tongji.baidu.com/data/browser">浏览器市场份额</a></li>
            </ul>
          </div>
        </div>

        <div className='nav-wrap'>
          <div className='domain'>文档/资源</div>

          <div className="nav-list f-clearfix">
            <div className='subject'>前端文档</div>
            <ul className='navs'>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="http://es6.ruanyifeng.com/">ES6</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://www.tslang.cn/docs/home.html">TypeScript</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://reacttraining.com/react-router/">React Router</a></li>
            </ul>
          </div>

          <div className="nav-list f-clearfix">
            <div className='subject'>静态资源</div>
            <ul className='navs'>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://cdn.baomitu.com/">360前端静态资源库</a></li>
            </ul>
          </div>
        </div>

        <div className='nav-wrap'>
          <div className='domain'>UI设计</div>

          <div className="nav-list f-clearfix">
            <div className='subject'>图标库</div>
            <ul className='navs'>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://www.iconfont.cn/">阿里矢量图</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://fontawesome.com/icons?from=io">fontawesome</a></li>
            </ul>
          </div>

          <div className="nav-list f-clearfix">
            <div className='subject'>设计/灵感</div>
            <ul className='navs'>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://dribbble.com/">Dribbble</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://www.behance.net/">Behance</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://www.ui.cn/">UI中国</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://www.zcool.com.cn/">酷站</a></li>
            </ul>
          </div>
        </div>

        <div className='nav-wrap'>
          <div className='domain'>框架/类库</div>

          <div className="nav-list f-clearfix">
            <div className='subject'>框架</div>
            <ul className='navs'>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://reactjs.org/">React</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://reactnative.cn/">React Native</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://cn.vuejs.org/">Vue</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://angular.cn/">Angular</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://flutterchina.club/">Flutter</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://www.layui.com/">layui</a></li>
            </ul>
          </div>

          <div className="nav-list f-clearfix">
            <div className='subject'>UI框架</div>
            <ul className='navs'>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://ant.design/">AntDesign</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://element.eleme.io/#/zh-CN">ElementUI</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="http://www.bootcss.com/">Bootstrap</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://semantic-ui.com/">Semantic UI</a></li>
            </ul>
          </div>

          <div className="nav-list f-clearfix">
            <div className='subject'>类库</div>
            <ul className='navs'>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="http://jquery.com/">jQuery</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://threejs.org/">Three.js</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://d3js.org/">D3</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://echarts.baidu.com/">eCharts</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://www.chartjs.org/">Chart.js</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://www.highcharts.com/">HighCharts</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://daneden.github.io/animate.css/">Animate.css</a></li>
              <li className='nav'><a rel="noopener noreferrer" target="_blank" href="https://necolas.github.io/normalize.css/">Normalize.css</a></li>
            </ul>
          </div>
        </div>

      </div>  

    )
  }
}
