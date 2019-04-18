<template>
  <div>
    <div class="main">
      <div class="mbox left fj" v-for="(item, index) in tops" :key="index" :class="{ xbox: index % 2 == 0 }">
        <div class="imgbox left">
          <img src="/www/img/logo1.png" class="bj" />
        </div>
        <div class="txtbox left">
          <p class="title">
            <router-link :to="`/jobs/campus/${item.id}`" v-if="$platform == 'school'">{{ item.title || item.subject }}</router-link>
            <a :href="url(item)" v-else>{{ item.subject }}</a>
          </p>
          <p class="txt">{{ item.corpname }}</p>
        </div>
        <div class="data right">
          <span>{{ item.meta.createdAt | date('YYYY-MM-DD') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapActions, mapState } = createNamespacedHelpers('jobs/campus');

export default {
  name: 'TabItemcampus',
  data() {
    return {};
  },
  methods: {
    ...mapActions(['top']),
    url(item) {
      return `http://${item.unit}.smart.jilinjobswx.cn/www/jobs/campus/${item.id}`;
    },
  },
  mounted() {
    this.top({ size: 6 });
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
