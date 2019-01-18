import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutation-types';
import menu from './menu';
// import job from './jobs';

Vue.use(Vuex);

const store = () => new Vuex.Store({
  state: {
    // job,
    menu,
    page: '', // 一级栏目
    column: '',// 二级栏目
  },
  mutations: {
    [types.SET_PAGE](state, payload) {
      state.page = payload || 'home';
    },
    [types.SET_COLUMN](state, payload) {
      state.column = payload;
    },
  }
});

export default store;
