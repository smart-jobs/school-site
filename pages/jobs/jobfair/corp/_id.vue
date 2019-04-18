<template>
  <div class="data right">
    <loading v-if="loading"/>
    <div class="main" v-else>
      <div class="title">{{ data && data.corpname }}</div>
      <div class="content" v-html="data && data.description"></div>
    </div>
  </div>
</template>

<script>
// 企业详情
import { createNamespacedHelpers } from 'vuex';
import Loading from '@/components/utils/loading';

const { mapActions } = createNamespacedHelpers('jobs/jobfair');

export default {
  components: {
    Loading,
  },
  name: 'corp_info',
  data() {
    return {
      data: {},
      loading: true,
    };
  },
  methods: {
    ...mapActions(['corp_fetch']),
  },
  async mounted() {
    const id = this.$route.params.id;
    const res = await this.corp_fetch({ id });
    this.loading = false;
    if (this.$checkRes(res)) {
      this.data = res.data;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .data {
    padding: 0 20px;
  }
  .title {
    text-align: center;
    font-size: 1.5em;
    padding: 10px 20px;
    color: #1c68a2;
  }
  .content {
    margin-top: 20px;
    text-indent: 2em;
    padding-bottom: 1em;
    border-bottom: 1px solid #ddd;
  }
</style>
