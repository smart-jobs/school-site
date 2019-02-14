import * as types from '@/store/.mutation.js';

const topSize = 6;
const pageSize = 10;

const api = {
  query: '/user/acct/info',
};
// initial state
export const state = () => ({
  userinfo: []
});

// actions
export const actions = {
  async query({ commit }, { id }) {
    const res = await this.$axios.$get(`${api.fetch}?id=${id}`);
    if (res.errcode === 0) commit(types.LOADED_DETAIL, res.data);
    return res;
  }
};

// mutations
export const mutations = {
  [types.LOADED_DETAIL](state, payload) {
    state.current = payload;
  }
};

export const namespaced = true;
