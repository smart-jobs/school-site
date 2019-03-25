import * as types from '@/store/.mutation.js';

const api = {
  query: '/cms/news/list',
  fetch: '/cms/news/fetch',
  site: '/cms/site/config',
  content: '/cms/site/content', 
};
// initial state
export const state = () => ({
  items: [],
  currents: null,
  total: 0,
  sites: null,
  contents: null
});

// actions
export const actions = {
  async query({ commit }, { page,pagesize,column }) {
    const skip = (page - 1) * pagesize;
    const params = { skip, limit: pagesize, column: column };
    const res = await this.$axios.$get(api.query, { params });
    if (res.errcode === 0) {
      commit(types.LOADED_LIST, res);
    }
    return res;
  },
  async query2({ commit }, { page,pagesize,column }) {
    const skip = (page - 1) * pagesize;
    const params = { skip, limit: pagesize, column: column };
    const res = await this.$axios.$get(api.query, { params });
    return res;
  },
  async fetch({ commit }, { id }) {
    const res = await this.$axios.$get(`${api.fetch}?id=${id}`);
    if (res.errcode === 0) {
        commit(types.LOADED_DETAIL, res.data);
    }
    return res;
  },
  async site({ commit }) {
    const res = await this.$axios.$get(api.site);
    if (res.errcode === 0) {
        commit(types.PLATFORM_INIT, res.data);
    }
    return res;
  },
  async content({ commit }) {
    const res = await this.$axios.$get(api.content);
    if (res.errcode === 0) {
        commit(types.LOGIN_SUCCESS, res.data);
    }
    return res;
  },
};

// mutations
export const mutations = {
  [types.LOADED_LIST](state, { data, total }) {
    state.items = data;
    state.total = total;
  },
  [types.LOADED_DETAIL](state, payload) {
    state.currents = payload;
  },
  [types.PLATFORM_INIT](state, payload) {
    state.sites = payload;
  },
  [types.LOGIN_SUCCESS](state, payload) {
    state.contents = payload;
  },
};

export const namespaced = true;
