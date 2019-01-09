import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = () => new Vuex.Store({
  state:{
    IsShow: false,
    val: '',
    // 导航
    option: '',
    show1: false,
    show2: false,
    show3: false,
    b1:true,
    b2: false,
    b3: false,
    b4: false,
    b5: false,
    b6: false,
    b21: false,
    b22: false,
    b23: false,
    b24: false,
    b31: false,
    b32: false,
    b41: false,
    b42: false,
    b43: false,
    b44: false
  },
  mutations: {

  }
})

export default store
