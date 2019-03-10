import * as types from '@/store/.mutation.js';

const api = {
  corp_list: '/jobs/jobfair/corp/list',
  details: '/corp/details'
};
// initial state
export const state = () => ({
  details: null
});

// actions
export const actions = {
  async detailsy({ commit }, { id,tenant }) {
    const res = await this.$axios.$get(`${api.details}?corpid=${id}&_tenant=${tenant}`);
    if (res.errcode === 0) commit(types.LOADED_DETAIL, res.data);
    return res;
  },
};

// mutations
export const mutations = {
  [types.LOADED_DETAIL](state, payload) {
    state.details = payload;
  },
};

export const namespaced = true;
