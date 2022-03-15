import Vue from 'vue';
import Vuex from 'Vuex';

Vue.use(Vuex);

import home from './home';// home 模块化
import search from './search';// search 模块化

export default new Vuex.Store({
    modules: {
        home,
        search,
    }
});