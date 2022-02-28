<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <!-- 声明式导航 -->
            <router-link to="/login">登录</router-link>
            <router-link to="/register" class="register">免费注册</router-link>
          </p>
        </div>
        <div class="typeList">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" to="/home">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge" v-model="wd"
          />
          <button class="sui-btn btn-xlarge btn-danger" type="button" @click="doSearch">
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        wd: ''
      }
    },
    methods: {
      doSearch() {
        // 1.0 字符串形式
        // this.$router.push('/search/'+ this.wd + "?k="+ this.wd)
        // 2.0 模板字符串
        // this.$router.push(`/search/${this.wd}?k=${this.wd.toUpperCase()}`)
        // 3.0 对象写法
        // this.$router.push({
        //   name:"search",
        //   params:{
        //     wd: this.wd,
        //   },
        //   query:{
        //     k:this.wd.toUpperCase(),
        //   }
        // })
        /***************************************************************/
        // 面试题1 路由传参(对象写法) path是否可以结合params一起使用?
        // 路由跳转传参时，对象写法可以是path、name 但是path写法时，不支持params传参
        // this.$router.push({
        //   path: '/search',
        //   params:{
        //     wd: this.wd,
        //   },
        //   query:{
        //     k:this.wd.toUpperCase(),
        //   }
        // })

        // 面试题2 如何指定params参数可传可不传
        // router中已经配置占位，但是就是不传params参数，路径缺失 http://localhost:8080/#/?k=KJKJ
        // 如果想可传可不传 占位时加一个问号 path:'/search/:wd?'
        // this.$router.push({
        //   name:"search",
        //   query: {
        //     k: this.wd.toUpperCase(),
        //   }
        // })

        // 面试题3 params参数可以传递也可以不传递，但是如果传递的是空串如何处理
        // 使用undefine: params参数可以传递或者不传递时，传递空字符串的问题
        // this.$router.push({
        //   name:"search",
        //   params:{wd:'' || undefined},
        //   query: {
        //     k: this.wd.toUpperCase(),
        //   }
        // })

        // 报错处理 Uncaught (in promise) NavigationDuplicated
        // 声明式导航 没有这种问题 因为底层处理好了，而编程式导航有问题
        // 通过给push方法传递 相应的成功和失败函数，可以捕获到当前的错误，但是治标不治本
        // 在别的地方使用时还是得处理
        // this.$router.push({
        //   name:"search",
        //   params:{
        //     wd: this.wd,
        //   },
        //   query:{
        //     k:this.wd.toUpperCase(),
        //   }
        // },()=>{},(error)=>{});
        this.$router.push({
          name:"search",
          params:{
            wd: this.wd,
          },
          query:{
            k:this.wd.toUpperCase(),
          }
        });

      }
    }
  };
</script>

<style lang="less" scoped>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>