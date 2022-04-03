import { reqCategoryList, reqGetBannerList } from '@/api'

const state = {
    categoryList: [],
    bannerList: [],
};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state,bannerList) {
        state.bannerList = bannerList;
    }
};
const actions = {
    // 请求服务器 获取数据
    async categoryList({commit}) {
       let categoryList = await reqCategoryList();
       if (categoryList) 
            commit("CATEGORYLIST", categoryList);
    },
    async getBannerList({commit}) {
        let bannerList = await reqGetBannerList();
        if (bannerList)
            commit("GETBANNERLIST",bannerList);
    }

};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters,
};
