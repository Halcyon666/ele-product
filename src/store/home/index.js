import { reqCategoryList } from '@/api'

const state = {
    categoryList: [],
};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
};
const actions = {
    // 请求服务器 获取数据
    async categoryList({commit}) {
       let categoryList = await reqCategoryList();
       if (categoryList) 
            commit("CATEGORYLIST", categoryList)
    }

};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters,
};
