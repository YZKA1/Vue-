// 入口文件

import Vue from 'vue'

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

// 导入Mint-UI 中的组件

import { Header } from 'mint-ui';

Vue.component(Header.name, Header);

 

// 导入 app 根组件
import App from './App'


import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})