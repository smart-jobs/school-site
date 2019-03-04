// 宣讲会
import * as types from '@/store/.mutation.js';

const api = {
  query: '/jobs/campus/list',
  fetch: '/jobs/campus/fetch',
  update: '/jobs/campus/update',
  add: '/jobs/campus/create',
  details: '/jobs/jobfair/fetch',
};
// initial state
export const state = () => ({
  items: [],
  currents: null,
  total: null,
});

// actions
export const actions = {
  async query({ commit }, { corpid, size, pagesize }) { // 查询
    const params = { corpid:corpid, skip:(size-1)*pagesize, limit:pagesize };
    const res = await this.$axios.$get(api.query,{ params });
    if (res.errcode === 0) {
      commit(types.LOADED_LIST, res);
    }
    return res;
  },
  async fetch({ commit }, {id} ) { // 详细查询
    const params = {id:id};
    const res = await this.$axios.$get(api.fetch, { params });
    return res;
  },
  async update({ commit }, {corpid,id,dataForm} ) { // 修改
    const params = {corpid:corpid,id:id};
    const parameter = {...dataForm}
    const res = await this.$axios.$post(api.update, {...parameter}, { params });
    if (res.errcode === 0) {
      commit(types.LOADED_DETAIL, res.data);
    }
    return res;
  },
  async add({ commit }, {corpid,dataForm} ) { // 添加
    const params = {corpid:corpid};
    const parameter = {...dataForm}
    const res = await this.$axios.$post(api.add, {...parameter}, { params });
    if (res.errcode === 0) {
      commit(types.LOADED_DETAIL, res.data);
    }
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
