import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入对应的路由组件
import homeContainer from '../page/home/'
import memberContainer from '../page/member/index.vue'
import searchContainer from '../page/search/index.vue'
import shopcarContainer from '../page/shopcar/index.vue'
Vue.use(VueRouter)
// 创建路由对象


var router = new VueRouter({
    routes: [  // 配置路由规则
        {path: '/',redirect:'/home'},
        {path: '/home', component: homeContainer},
        {path: '/member', component: memberContainer},
        {path: '/search', component: searchContainer},
        {path: '/shopcar', component: shopcarContainer},
    ],
    linkActiveClass: 'mui-active' //覆盖默认路由高亮的类
})


// 暴露路由模块
export default router