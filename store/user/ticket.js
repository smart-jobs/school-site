import * as types from '@/store/.mutation.js';


const api = {
  query: '/jobs/jobfair/ticket/mylist',
};
// initial state
export const state = () => ({
  ticket_list: [],
  current: null,
});

// actions
export const actions = {
  async query({ commit }, { userid }) {
    const params = { userid: userid };
    const res = await this.$axios.$get(api.query,{ params });
    if (res.errcode === 0) {
      commit(types.TICKET_LIST, res.data);
    }
    return res;
  },
};

// mutations
export const mutations = {
  [types.TICKET_LIST](state, data) {
    state.ticket_list = data;
  },
}
