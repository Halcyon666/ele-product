import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/components/TypeNav'
// 引入路由
import router from '@/router'
// 引入Vuex
import store from '@/store'
// 导入Mock 模拟数据
import '@/mock/MockServer'

Vue.config.productionTip = false;
// 注册三级联动全局组件
Vue.component(TypeNav.name, TypeNav)

new Vue({
  render: h => h(App),
  router, // 注册路由
  store
}).$mount('#app')
