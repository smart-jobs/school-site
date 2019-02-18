import * as types from '@/store/.mutation.js';


const api = {
  info: '/user/info',
};
// initial state
export const state = () => ({
  userinfo: null,
});

// actions
export const actions = {
  async userquery({ commit }, { userid }) {
    const params = { id: userid };
    const res = await this.$axios.$get(api.info,{ params });
    if (res.errcode === 0) {
      commit(types.USER_INFO, res.data);
    }
    return res;
  }
};

// mutations
export const mutations = {
  [types.USER_INFO](state, data) {
    state.userinfo = data;
  }
};

export const namespaced = true;
