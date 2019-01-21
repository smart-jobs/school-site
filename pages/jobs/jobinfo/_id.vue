<template>
  <div class="details">
    <p class="title">{{current && current.title}}</p>
    <p class="text">企业名称：{{current && current.corpname}}</p>
    <p class="text">工作位置：{{current | get('city.name')}}</p>
    <!-- <p class="text">薪资待遇：{{current.salary.name}}</p>
    <p class="text">招聘人数：{{current.count}}</p>
    <p class="text">工作性质：{{current.nature.name}}</p>
    <p class="text">工作类型：{{current.jobcat.name}}</p>
    <p class="text">学历要求：{{current.xlreqs.name}}</p>
    <p class="text">专业要求：{{current.zyreqs}}</p>
    <p class="text">岗位职责：{{current.jobdesc}}</p>
    <p class="text">分站信息：{{current.unit}}</p>
    <p class="text2">{{current.content}}</p> -->
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapActions, mapState } = createNamespacedHelpers('jobs/jobinfo');

export default {
  name: 'JobinfoDetail',
  data() {
    return {};
  },
  methods: {
    ...mapActions(['fetch']),
  },
  mounted() {
    let id = this.$route.params.id;
    this.fetch({ id });
    console.log(this.current);
  },
  computed: {
    ...mapState(['current']),
  },
  filters: {
    content: function(val) {
      // val.indexOF([0-9])
      // return
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.title {
  font-size: 1.2em;
  font-weight: 600;
  line-height: 3em;
}
.text {
  line-height: 2.5rem;
  border-bottom: 1px solid #dbdbdb;
}
.text2 {
  margin-top: 3em;
  line-height: 2rem;
}
</style>
