import React from 'react';
import ReactDOM from 'react-dom';

//引入通用样式
import './assets/css/base.css'
//约束字体比值
import  './assets/js/font';

//引入数据交互的插件配置
import './plugins/axios';
import './plugins/umi-request';


import {BrowserRouter as Router} from 'react-router-dom';

const show = () =>{
    console.log('leader')
}

ReactDOM.render(
    <Router>
        <div>hello</div>
    </Router>,
  document.getElementById('root')
);


