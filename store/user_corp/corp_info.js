import * as types from '@/store/.mutation.js';


const api = {
  info: '/corp/info',
};
// initial state
export const state = () => ({
  corp_info: null,
});

// actions
export const actions = {
  async corp_query({ commit }, { corpid }) {
    const params = { corpid: corpid };
    const res = await this.$axios.$get(api.info,{ params });
    if (res.errcode === 0) {
      commit(types.USER_INFO, res);
      console.log(res)
    }
    return res;
  }
};

// mutations
export const mutations = {
  [types.USER_INFO](state, data) {
    state.corp_info = data;
  }
};

export const namespaced = true;
