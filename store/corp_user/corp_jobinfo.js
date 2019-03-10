// 招聘信息
import * as types from '@/store/.mutation.js';

const api = {
  query: '/jobs/jobinfo/list',
  fetch: '/jobs/jobinfo/fetch',
  updata: '/jobs/jobinfo/update',
  create: '/jobs/jobinfo/create',
};
// initial state
export const state = () => ({
  items: [],
  currents: null,
  total: null,
});

// actions
export const actions = {
  async query({ commit }, { corpid,size,pagesize }) { // 查询
    const params = { corpid:corpid,limit:pagesize,skip:(size-1)*pagesize };
    const res = await this.$axios.$get(api.query,{ params });
    if (res.errcode === 0) {
      commit(types.LOADED_LIST, res);
    }
    return res;
  },
  async fetch({ commit }, { id }) { // 详细查询
    const params = { id:id };
    const res = await this.$axios.$get(api.fetch,{ params });
    if (res.errcode === 0) {
      commit(types.LOADED_DETAIL, res.data);
    }
    return res;
  },
  async fetchs({ commit }, { id }) { // 详细查询
    const params = { id:id };
    const res = await this.$axios.$get(api.fetch,{ params });

    return res;
  },
  async create({ commit }, {corpid,dataForm} ) { // 回复
    const params = {corpid:corpid};
    const parameter = {...dataForm}
    const res = await this.$axios.$post(api.create, { ...parameter},{params});
    return res;
  },
  async updata({ commit }, {id,corpid,dataForm} ) { // 回复
    const params = {id:id,corpid:corpid};
    const parameter = {...dataForm}
    const res = await this.$axios.$post(api.updata, { ...parameter},{params});
    return res;
  },
};

// mutations
export const mutations = {
  [types.LOADED_LIST](state, res) {
    state.items = res.data
    state.total = res.total
  },
  [types.LOADED_DETAIL](state, data) {
    state.currents = data
  },
};

export const namespaced = true;
