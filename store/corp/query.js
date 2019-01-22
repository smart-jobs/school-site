import * as types from '../jobs/.mutation.js';

const api = {
  enterprise: '/jobs/jobfair/corp/list',
  details: '/corp/details'
};
// initial state
export const state = () => ({
  details: null
});

// actions
export const actions = {
  async dts({ commit }, { id,tenant }) {
    const res = await this.$axios.$get(`${api.details}?corpid=${id}&_tenant=${tenant}`);
    if (res.errcode === 0) commit(types.LOADED_DTS, res.data);
    return res;
  },
};

// mutations
export const mutations = {
  [types.LOADED_DTS](state, dts) {
    state.details = dts;
  },
};

export const namespaced = true;
