import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/components/TypeNav'
// 注册三级联动全局组件
Vue.component(TypeNav.name, TypeNav)
// 引入路由
import router from '@/router'
// 引入Vuex
import store from '@/store'

// Vue.config.productionTip = false;
import {reqCategoryList} from '@/api'
reqCategoryList();

new Vue({
  render: h => h(App),
  router, // 注册路由
  store
}).$mount('#app')
