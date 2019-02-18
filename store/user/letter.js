import * as types from '@/store/.mutation.js';


const api = {
  query: '/jobs/letter/mylist',
  fetch: '/jobs/letter/fetch',
};
// initial state
export const state = () => ({
  mylist: null,
  myfetch: null
});

// actions
export const actions = {
  async query({ commit }, { userid }) {
    const params = { userid: userid };
    const res = await this.$axios.$get(api.query,{ params });
    if (res.errcode === 0) {
      commit(types.LETTER_QUERY, res.data);
    }
    return res;
  },
  async fetch({ commit }, { id }) {
    const params = { id: id };
    const res = await this.$axios.$get(api.fetch,{ params });
    if (res.errcode === 0) {
      commit(types.LETTER_FETACH, res.data);
    }
    return res;
  },
};

// mutations
export const mutations = {
  [types.LETTER_QUERY](state, data) {
    state.mylist = data;
  },
  [types.LETTER_FETACH](state, payload) {
    state.myfetch = payload;
  }
};

export const namespaced = true;
