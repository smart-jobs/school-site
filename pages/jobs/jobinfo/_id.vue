<template>
  <div class="details">
    <p class="title fj">
      <span class="fd1">{{current && current.title}}</span>
      <el-button class="fd1 btn0" type="text" v-if="userinfo.role == 'user'">投递简历</el-button>
    </p>
    <p class="text">企业名称：{{current && current.corpname}}</p>
    <p class="text">工作位置：{{current | get('city.name')}}</p>
    <p class="text">薪资待遇：{{current | get('salary.name')}}</p>
    <p class="text">招聘人数：{{current && current.count}}</p>
    <p class="text">工作性质：{{current | get('nature.name')}}</p>
    <p class="text">工作类型：{{current | get('jobcat.name')}}</p>
    <p class="text">学历要求：{{current | get('xlreqs.name')}}</p>
    <p class="text">专业要求：{{current && current.zyreqs}}</p>
    <p class="text">岗位职责：{{current && current.jobdesc}}</p>
    <p class="text">分站信息：{{current && current.unit}}</p>
    <pre class="text2">{{current && current.content}}</pre>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapActions, mapState } = createNamespacedHelpers('jobs/jobinfo');
const { mapState: log } = createNamespacedHelpers("login");
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
  },
  computed: {
    ...mapState(['current']),
    ...log(["userinfo"]),
  }
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
.btn0 {
  padding: 3px 0;
  margin-top: 1.2em;
  margin-left: 3%;
  display: block;
  text-align: left;
}
</style>
