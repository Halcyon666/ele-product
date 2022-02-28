<template>
  <div id="app">
     <Header></Header>
     <!-- 路由组件显示 -->
    <router-view></router-view>
    <!-- search 和 home 页面显示footer -->
    <Footer v-show="$route.meta.isShow"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header/";
import Footer from "./components/Footer/";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  methods: {
   
  }
};
</script>
