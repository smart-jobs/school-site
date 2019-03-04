// 宣讲会
import * as types from '@/store/.mutation.js';

const api = {
  query: '/jobs/campus/list',
  fetch: '/jobs/campus/fetch',
  update: '/jobs/campus/job/update',
  add: '/jobs/campus/create ',
  details: '/jobs/jobfair/fetch',
};
// initial state
export const state = () => ({
  items: [],
  currents: null,
});

// actions
export const actions = {
  async query({ commit }, { corpid, size, pagesize }) { // 查询
    const params = { corpid:corpid, skip:size, limit:pagesize };
    const res = await this.$axios.$get(api.query,{ params });
    if (res.errcode === 0) {
      commit(types.LOADED_LIST, res.data);
    }
    return res;
  },
  async fetch({ commit }, {id} ) { // 详细查询
    const params = {id:id};
    const res = await this.$axios.$get(api.fetch, { params });
    if (res.errcode === 0) {
      // console.log(res)
      commit(types.LOADED_DETAIL, res.data);
    }
    return res;
  },
  async update({ commit }, {corpid,id,subject, content, address, time, contact, email, jobs, date} ) { // 修改
    const params = {corpid:corpid,id:id};
    const parameter = {subject, content, address, time, contact, email, jobs, date}
    const res = await this.$axios.$post(api.update, {parameter}, { params });
    if (res.errcode === 0) {
      commit(types.LOADED_DETAIL, res.data);
    }
    return res;
  },
  async add({ commit }, {corpid,fair_id,name,count,requirement} ) { // 添加
    const params = {corpid:corpid,fair_id:fair_id};
    const parameter = {name:name,count:count,requirement:requirement}
    const res = await this.$axios.$post(api.add, parameter, { params });
    if (res.errcode === 0) {
      commit(types.LOADED_DETAIL, res.data);
    }
    return res;
  },
};

// mutations
export const mutations = {
  [types.LOADED_LIST](state, data) {
    state.items = data
  },
  [types.LOADED_DETAIL](state, data) {
    state.currents = data
  },
};

export const namespaced = true;
