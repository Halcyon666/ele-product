import {reqGetSearchInfo} from '@/api'

const state = {
    searchList: {},
};
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList;
    },
};
const actions = {
    // data={} 默认为空对象
    async getSearchList({commit}, data={}){
        let list = await reqGetSearchInfo(data);
        if (list.code === 200) 
        commit("GETSEARCHLIST", list.data)
    }
};
const getters = {};


export default {
    state,
    mutations,
    actions,
    getters,
};