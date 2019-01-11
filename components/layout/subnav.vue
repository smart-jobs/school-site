<template>
  <div class="fd1 tab">
    <div v-for="(item,index) in data" :key="index" :class="{ a1: item.key == activated }" 
      @click="menuClick(item)">{{item.label}}</div>
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
<style scoped>
.tab {
  width: 20%;
  background: rgb(240, 240, 240);
  line-height: 2.5em;
  color: #000;
}
.tab div {
  border-bottom: 1px solid #333;
  text-indent: 1em;
  cursor: pointer;
}
.a1 {
  color: #1e649f;
  border-left: 3px solid #1e649f;
}
</style>
