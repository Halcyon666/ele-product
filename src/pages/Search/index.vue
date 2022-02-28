<template>
<div>
  <div>Search Page</div>
  <h1>{{$route.params.wd}}</h1>
  <h1>{{$route.query.k}}</h1>
</div>
    
</template>

<script>
  export default {
    name: "Search",
    props: ['wd','a','b'] // 路由组件可以传递props
  };
</script>

<style lang="less" scoped>

</style>