<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <!-- 鼠标离开事件 委派给父级 -->
      <div @mouseleave="hideMenu" @mouseenter="showMenu">
        <h2 class="all">全部商品分类</h2>
        <!-- 过渡动画 -->
        <transition name='sort'>
          <!-- 三级联动 -->
          <div class="sort" v-show="isShow">
            <div class="all-sort-list2" @click="goSearch">
              <div
                class="item"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                :class="{ addBgClr: currentIndex == index }"
              >
                <h3 @mouseenter="changeIndex(index)">
                  <a
                    :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                </h3>
                <!-- 二级联动 -->
                <div
                  class="item-list clearfix"
                  :style="{
                    display: currentIndex == index ? 'block' : 'none',
                  }"
                >
                  <div
                    class="subitem"
                    v-for="c2 in c1.childCategory"
                    :key="c2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          :data-categoryName="c2.categoryName"
                          :data-category2Id="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                      </dt>
                      <!-- 三级联动 -->
                      <dd>
                        <em v-for="c3 in c2.childCategory" :key="c3.categoryId">
                          <a
                            :data-categoryName="c3.categoryName"
                            :data-category3Id="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import throttle from "lodash/throttle";

export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1, // 指示鼠标所属的分类
      isShow: true,
    };
  },
  // 挂载完毕后 拉取三级联动菜单数据
  mounted() {
    // this.$store.dispatch("categoryList");
    if (this.$route.path != "/home") {
      this.isShow = false;
    }
  },
  computed: {
    ...mapState({
      // categoryList:(state) => {
      //     return state.home.categoryList;
      // }
      categoryList: (state) => state.home.categoryList,
    }),
  },
  methods: {
    // changeIndex(index) {
    //   this.currentIndex = index;
    // },
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 50),
    hideMenu() {
      this.currentIndex = -1; // 当前选中栏是否联动展示
      if (this.$route.path != "/home") {
        this.isShow = false; // 整个菜单是否显示,只在search页面生效，首页始终显示
      }
    },
    goSearch(event) {
      // 为防止卡顿采取 编程式跳转 和 事件委派
      // 1.使用 :data-categoryName="c3.categoryName" 标识a标签
      let ele = event.target;
      let { categoryname, category1id, category2id, category3id } = ele.dataset;
      let location = {
        name: "search",
        query: { categoryName: categoryname },
      };

      if (categoryname) {
        if (category1id) {
          location.query.category1Id = category1id;
        } else if (category2id) {
          location.query.category2Id = category2id;
        } else {
          location.query.category3Id = category3id;
        }
      }
      if (this.$route.params) {
        location.params = this.$route.params;
        this.$router.push(location);
      }
    },
    // 搜索页面当鼠标进入的时候展示全部商品菜单
    showMenu() {
      this.isShow = true;
    },
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
          // 改用js书写
          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }
        .addBgClr {
          background-color: skyblue;
        }
      }
    }
    // 导航栏菜单展示进入开始状态
    .sort-enter {
      height: 0px;
    }
    // 导航栏菜单展示进入结束状态
    .sort-enter-to {
      height: 461px;
    }
    .sort-enter-active {
      transition: all .5s linear;
    }

    .sort-leave {
      height: 461px;
    }
    .sort-leave-to {
      height: 0px;
    }
    .sort-leave-active {
      transition: all .5s linear;
    }
  }
}
</style>