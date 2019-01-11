<template>
  <div class="boxone fj">
    <!--二级导航菜单-->
    <sub-nav :data="columns" :activated="column" />
    <!--页面内容-->
    <nuxt-child />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SubNav from '@/components/layout/subnav';

export default {
  components: {
    SubNav,
  },
  computed: {
    ...mapState(['menu', 'page', 'column']),
    columns() {
      const data = this.menu.find(p => p.key === this.page);
      return data && data.children;
    },
  },
};
</script>

<style scoped>
.boxone {
  width: 1200px;
  margin: 0 auto;
  position: relative;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.data {
  width: 75%;
}
ul {
  width: 100%;
}
li {
  width: 100%;
  line-height: 2.5em;
  border-bottom: 1px dashed #999;
  text-indent: 2em;
  cursor: pointer;
}
a {
  width: 50%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
a:hover {
  color: #1e649f;
}
.spandata {
  margin-right: 3%;
}
.data {
  background: rgb(243, 243, 243);
}
.pv {
  margin-top: 2rem;
}
</style>
