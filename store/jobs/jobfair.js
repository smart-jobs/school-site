import * as types from './.mutation.js';


const api = {
  simple: '/jobs/jobfair/simple',
  query: '/jobs/jobfair/query',
  fetch: '/jobs/jobfair/fetch',
};
// initial state
export const state = () => ({
  tops: [],
  items: [],
  current: null,
  total: 0,
});

// actions
export const actions = {
  async top({ commit }, { paging }) {
    const size = paging;
    const params = { skip: 0, limit: size };
    const res = await this.$axios.$get(api.simple, { params });
    if (res.errcode === 0) {
      commit(types.LOADED_TOP, res);
    }
    return res;
  },
  async query({ commit }, { paging }) {
    const { page = paging.page, size = paging.pageSize } = paging;
    const skip = Math.max(0, (page - 1) * size);
    const params = { skip, limit: size };
    const res = await this.$axios.$get(api.query, { params });
    console.log(res)
    if (res.errcode === 0) {
      commit(types.LOADED_LIST, res);
    }
    return res;
  },
  async fetch({ commit }, { id }) {
    const res = await this.$axios.$get(`${api.fetch}?id=${id}`);
    if (res.errcode === 0) commit(types.LOADED_DETAIL, res.data);
    return res;
  },
};

// mutations
export const mutations = {
  [types.LOADED_TOP](state, { data }) {
    state.tops = data;
  },
  [types.LOADED_LIST](state, { data, total }) {
    state.items = data;
    state.total = total;
  },
  [types.LOADED_DETAIL](state, payload) {
    state.current = payload;
  },
};

export const namespaced = true;
