import _ from 'lodash';
import * as types from './.mutation';
import menu from './.menu';
//扁平化展开的菜单项
const menus = menu.map(p => _.isArray(p.children) ? [p, ...p.children] : [p])
  .reduce((p, c) => [...p, ...c], []);
export const state = () => ({
  menu: menu,
  menus: menus,
  page: '', // 一级栏目
  column: '',// 二级栏目
  config: null, // 网站配置信息
});

// actions
export const actions = {
  async nuxtServerInit({ commit, dispatch }, { req, app, error }) {
    const _tenant = req.headers['x-tenant'] || '99991';
    console.log(`call nuxtServerInit for ${_tenant}...`);

    const res = await this.$axios.$get(`http://smart.jilinjobswx.cn/www/api/cms/site/config`, { params: { _tenant }});
    if (res && res.errcode) {
      console.error('fetch site config fail:', res);
      error({ message: res.errmsg });
      return;
    }
    if (!res.data) {
      console.error('fetch site config fail, invalid code: ', _tenant);
      error({ message: '该高校分站还未开通' });
      return;
    }
    // console.log(res.data);
    commit(types.SITE_INIT, res.data);

    // console.log(app.$axios);
  },
}

export const mutations = {
  [types.SITE_INIT](state, payload) {
    state.config = payload;
  },
  [types.SET_PAGE](state, payload) {
    state.page = payload || 'home';
  },
  [types.SET_COLUMN](state, payload) {
    state.column = payload;
  },
}

export const getters = {
  isAuthenticated: state => state.login.isAuthenticated,
  userinfo: state => state.login.userinfo,
  access_token: state => state.login.access_token,
  config: state => state.config,
}
