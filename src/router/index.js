import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用插件
Vue.use(VueRouter)
export default new VueRouter({
    // 配置路由
    routes: [
        {
            path:'/home',
            name:'home',
            component: () => import('@/pages/Home/')
        },
        {
            path:'/search',
            name:'search',
            component: () => import('@/pages/Search')
        },
        {
            path:'/register',
            name:'register',
            component: () => import('@/pages/Register')
        },
        {
            path:'/login',
            name:'login',
            component: () => import('@/pages/Login')
        },
        {
            // 访问/时访问首页
            path:'/',
            redirect:'/home'
        }
    ]
})
