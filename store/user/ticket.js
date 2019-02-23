import * as types from '@/store/.mutation.js';


const api = {
  query: '/jobs//jobfair/ticket/mylist',
  fetch: '/jobs/jobfair/fetch',
};
// initial state
export const state = () => ({
  ticket_list: null,
  current: null,
  currentlist: [],
  i: 0
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
  async fetch({ commit }, { id }) {
    const res = await this.$axios.$get(`${api.fetch}?id=${id}`);
    if (res.errcode === 0) commit(types.LOADED_DETAIL, res.data);
    return res;
  },
};

// mutations
export const mutations = {
  [types.TICKET_LIST](state, data) {
    state.ticket_list = data;
  },
  [types.LOADED_DETAIL](state, payload) {
    if (state.ticket_list !== null) {
      state.ticket_list[state.i].currentlist = payload
      state.i++
    }
  },
}
