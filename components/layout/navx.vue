<template>
  <div class="zj_navx_box">
    <div class="zj_navx_btn" v-for="(item,index) in menu" :key="index" :class="{zj_navx_a1:a1 == index}" @click="menuClick(item)"
         @mouseenter="enter1(index)" @mouseleave="leave1">
      {{item.label}}
      <div class="zj_navx_Submenu" v-if="item.children && item.children.length &gt; 0" v-show="a1 == index && showSub">
        <div v-for="(sub, index2) in item.children" :key="index2" @mouseenter="enter2(index2)" @mouseleave="leave2"
             :class="{zj_navx_a2: a2 == index2}" @click.stop="menuClick(sub)">{{sub.label}}</div>
      </div>
    </div>
    <div class="zj_navx_btn" v-show="false">我的</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'navx',
  mounted() {
    this.a1 = this.pageIndex;
  },
  data() {
    return {
      a1: -1,
      a2: -1,
      showSub: false,
    };
  },
  computed: {
    ...mapState(['menu', 'page']),
    pageIndex() {
      const idx = this.menu.findIndex(p => p.key === this.page);
      return idx;
    },
  },
  methods: {
    // 一级菜单点击
    menuClick(item) {
      if (item && item.link) location.href = item.link;
    },
    // 移入
    enter1(index) {
      this.a1 = index;
      this.showSub = true;
    },
    enter2(index) {
      this.a2 = index;
    },
    // 移出
    leave1() {
      this.a1 = this.pageIndex;
      this.showSub = false;
    },
    leave2() {
      this.a2 = -1;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '~@/assets/total.less';
</style>>
