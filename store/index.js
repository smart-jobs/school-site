import * as types from './mutation-types';
import menu from './.menu';

export const state = () => ({
  menu: menu,
  page: '', // 一级栏目
  column: '',// 二级栏目
});

// actions
export const actions = {
  async nuxtServerInit({ commit, dispatch }, { req, app, error }) {
  }
}

export const mutations = {
  [types.SET_PAGE](state, payload) {
    state.page = payload || 'home';
  },
  [types.SET_COLUMN](state, payload) {
    state.column = payload;
  },
}
