// 招聘会
import * as types from '@/store/.mutation.js';

const api = {
  query: '/jobs/jobfair/corp/mylist',
  fetch: '/jobs/jobfair/corp/fetch',
  delete: '/jobs/jobfair/corp/job/delete',
  update: '/jobs/jobfair/corp/job/update',
  add: '/jobs/jobfair/corp/job/add',
};
// initial state
export const state = () => ({
  items: [],
  current: null,
});

// actions
export const actions = {
  async query({ commit }, { corpid }) { // 查询
    const params = { corpid:corpid };
    const res = await this.$axios.$get(api.query, { params });
    if (res.errcode === 0) {
      commit(types.LOADED_LIST, res.data);
    }
    return res;
  },
  async fetch({ commit }, {corpid,fair_id} ) { // 详细查询
    const params = {corpid:corpid,fair_id:fair_id};
    const res = await this.$axios.$get(api.fetch, { params });
    if (res.errcode === 0) {
      commit(types.LOADED_DETAIL, res.data);
    }
    return res;
  },
  async delete({ commit }, {corpid,job_id} ) { // 删除
    const params = {corpid:corpid,job_id:job_id};
    const res = await this.$axios.$post(api.delete, null, { params });
    if (res.errcode === 0) {
      commit(types.LOADED_DETAIL, res.data);
    }
    return res;
  },
  async update({ commit }, {corpid,job_id,name,count,requirement} ) { // 修改
    const params = {corpid:corpid,job_id:job_id};
    const parameter = {name:name,count:count,requirement:requirement}
    const res = await this.$axios.$post(api.update, {parameter}, { params });
    if (res.errcode === 0) {
      commit(types.LOADED_DETAIL, res.data);
    }
    return res;
  },
  async add({ commit }, {corpid,fair_id,name,count,requirement} ) { // 修改
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
    state.current = data
  },
};

export const namespaced = true;
