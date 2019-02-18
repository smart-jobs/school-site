import * as types from '@/store/.mutation.js';


const api = {
  query: '/jobs/resume/list',
  create: '/jobs/resume/create',
  fetch: '/jobs/resume/fetch',
  update: '/jobs/resume/update',
  delete: '/jobs/resume/delete',
};
// initial state
export const state = () => ({
  userlist: [],
  createlist: '',
  current: null,
  uplist: null,
  deleteok: null
});

// actions
export const actions = {
  async query({ commit }, { userid }) {
    const params = { userid: userid };
    const res = await this.$axios.$get(api.query,{ params });
    if (res.errcode === 0) {
      commit(types.USER_QUERY, res);
    }
    return res;
  },
  async create({ commit }, paging = {}) {
    const params = paging.item ;
    const userid = paging.userid
    const res = await this.$axios.$post(`${api.create}?userid=${userid}`,params);
    if (res.errcode === 0) {
      commit(types.USER_CREEAT, res);
    }
    return res;
  },
  async fetch({ commit }, { id }) {
    const params = { id: id };
    const res = await this.$axios.$get(api.fetch,{ params });
    if (res.errcode === 0) {
      commit(types.USER_FETACH, res.data);
    }
    return res;
  },
  async update({ commit }, paging = {}) {
    const params = paging.item ;
    const userid = paging.userid
    const id = paging.id
    const res = await this.$axios.$post(`${api.update}?userid=${userid}&id=${id}`,params);
    if (res.errcode === 0) {
      commit(types.USER_UPDATE, res);
    }
    return res;
  },
  async delete({ commit }, paging = {}) {
    const userid = paging.userid
    const id = paging.id
    const res = await this.$axios.$post(`${api.delete}?userid=${userid}&id=${id}`);
    if (res.errcode === 0) {
      commit(types.USER_DELETE, res);
    }
    return res;
  },
};

// mutations
export const mutations = {
  [types.USER_QUERY](state, { data}) {
    state.userlist = data;
  },
  [types.USER_CREEAT](state, payload) {
    state.createlist = payload;
  },
  [types.USER_FETACH](state, payload) {
    state.current = payload;
  },
  [types.USER_UPDATE](state, payload) {
    state.uplist = payload;
  },
  [types.USER_DELETE](state, payload) {
    state.deleteok = payload;
  },
};

export const namespaced = true;
