<template>
  <div>
    <div class="main">
      <div class="m2box" v-for="(item, index) in tops" :key="index" :class="{ xbox: index % 2 == 0 }">
        <div class="txtbox2 left">
          <img src="/www/img/logo2.png" class="bj" />
        </div>
        <div class="left titlebox">
          <div class="title title2"><a :href="url(item)">{{ item.subject }}</a></div>
          <p class="p">举办高校：{{ item.unit | dict('unit') }}</p>
        </div>
        <div class="left right2">{{ item.meta.createdAt | date('YYYY-MM-DD') }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapActions, mapState } = createNamespacedHelpers('jobs/jobfair');
export default {
  name: 'TabItemJobfair',
  methods: {
    ...mapActions(['top']),
    url(item) {
      return `http://${item.unit}.smart.jilinjobswx.cn/www/jobs/jobfair/${item.id}`;
    },
  },
  async mounted() {
    await this.$loadDict('unit');
    await this.top({ size: 2 });
  },
  computed: {
    ...mapState(['tops']),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import './widget.less';
</style>
