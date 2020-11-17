import React from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';

// 导入路由
import Router from "./router"

// 导入axio
import Axios from './http'
window.axios = Axios

ReactDOM.render(
  <Router />,
  document.getElementById('root')
);
