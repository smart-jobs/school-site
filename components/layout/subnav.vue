<template>
  <div class="zj_subnav_fd1 zj_subnav_tab">
    <div class="zj_subnav_tabs" v-for="(item,index) in data" :key="index" :class="{ a1: item.key == activated }">
        <div class="zj_subnav_tabx" @click="menuClick(item)">{{item.label}}</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'subnav',
  props: {
    data: { type: Array, required: true },
    activated: { type: String },
  },
  methods: {
    // 一级菜单点击
    menuClick(item) {
      if (item && item.link) location.href = item.link;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '~@/assets/total.less';
</style>
