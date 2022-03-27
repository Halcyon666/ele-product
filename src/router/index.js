import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用插件
Vue.use(VueRouter)
// 报错处理 Uncaught (in promise) NavigationDuplicated
// 先保存VueRouter原型对象的push 
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重写push/replace 
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        // call/apply 都可以调用函数一次，篡改函数的上下文一次
        // call 传递参数用逗号隔开，apply方法执行传递数组
        // 此处this保证上下文为Router实例
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}

export default new VueRouter({
    // 配置路由
    routes: [
        {
            path: '/home',
            name: 'home',
            component: () => import('@/pages/Home/'),
            meta: { isShow: true }
        },
        {
            path: '/search/:wd?',
            name: 'search',
            component: () => import('@/pages/Search'),
            meta: { isShow: true },
            // 面试题4 路由组件能不能传递props数据
            // 方法1 布尔值写法 并且只能传递params参数
            // props: true
            // 方法2 对象写法
            // props: {a:1,b:2,wd:'aaa'}
            // 方法3 函数写法 可以param参数 query参数 通过props传递给路由组件
           props: ($route) => ({ wd: $route.params.wd, k: $route.query.k })

        },
        {
            path: '/register',
            name: 'register',
            component: () => import('@/pages/Register'),
            meta: { isShow: false }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/pages/Login'),
            meta: { isShow: false }
        },
        {
            // 访问'/'时访问首页
            path: '/',
            redirect: '/home'
        }
    ]
})
