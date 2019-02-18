import * as types from '@/store/.mutation.js';


const api = {
  query: '/jobs/letter/mylist',
};
// initial state
export const state = () => ({
  mylist: [],
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
  }
};

// mutations
export const mutations = {
  [types.USER_QUERY](state, { data}) {
    state.mylist = data;
  },
  [types.USER_CREEAT](state, payload) {
    state.createlist = payload;
  }
};

export const namespaced = true;
