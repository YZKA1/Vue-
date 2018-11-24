// 入口文件
import Vue from "vue";
// 导入路由的包
import VueRouter from "vue-router";
import moment from "moment";
// 安装路由
Vue.use(VueRouter);

// 导入 vue-resource

import VueResource from "vue-resource";

// 注册 vue-resource
Vue.use(VueResource);

// 配置vue-resource的请求根域名
Vue.http.options.root = "http://www.lovegf.cn:8899/";

// 导入 MUI 的样式
import "./lib/mui/css/mui.min.css";
// 导入扩展图标样式
import "./lib/mui/css/icons-extra.css";

// 定义全局过滤器
Vue.filter("dateFormat", function(dateStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  // 直接调用表示获取当前时间
  return moment(dateStr).format(pattern);
});

// 导入Mint-UI 中的组件

import { Header, Swipe, SwipeItem,Button } from "mint-ui";

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

//导入自己的 router.js 路由模块

import router from "./router/index.js";

// 导入 app 根组件
import App from "./App";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router
});
