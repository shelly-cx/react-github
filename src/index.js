import React from 'react';
import ReactDOM from 'react-dom';

//引入通用样式
import './assets/css/base.css'
//约束字体比值
import  './assets/js/font';

import {BrowserRouter as Router} from 'react-router-dom';

console.log('搞事情')

ReactDOM.render(
    <Router>
        <UcCellTest/>
    </Router>,
  document.getElementById('root')
);


