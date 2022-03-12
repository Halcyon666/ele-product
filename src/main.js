import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/pages/Home/TypeNav'
// 注册三级联动全局组件
Vue.component(TypeNav.name, TypeNav)
// 引入路由
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router// 注册路由
}).$mount('#app')
