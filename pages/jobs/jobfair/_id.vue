<template>
  <div class="details">
    <p class="title">{{current && current.subject}}</p>
    <p class="text">分校信息：{{current && current.unit}}</p>
    <p class="text">举办时间：{{current && current.date+ ' '+current.time}}</p>
    <p class="text">举办城市：{{current | get('city.name')}}</p>
    <p class="text">举办地址：{{current && current.address}}</p>
    <p class="text3">温馨提示：为防讯息临时变动,参会前可联系招聘会举办方确认。</p>
    <p class="title">招聘会详情</p>
    <pre class="text2">{{current && current.content}}</pre>
    <p class="title">参展企业</p>
    <table>
      <thead>
        <tr>
          <td width="150">
            <b>操作</b>
          </td>
          <td width="300">
            <b>单位全称</b>
          </td>
          <td width="300">
            <b>职位名称</b>
          </td>
          <td width="150">
            <b>职位数</b>
          </td>
          <td width="300">
            <b>需求专业</b>
          </td>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item,num) in corp_list">
          <tr v-for="(job,index) in item.jobs" :key="num+'_'+index">
            <template v-if="index==0">
              <td width="150" class="operation" :rowspan="item.jobs.length">投递简历</td>
              <td width="300" class="th corpname" :rowspan="item.jobs.length" @click="btn(item)">{{corp_list && item.corpname}}</td>
            </template>
            <td width="300" class="th">{{job.name}}</td>
            <td width="150" class="th">{{job.count}}</td>
            <td width="300">{{job.requirement}}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapActions, mapState } = createNamespacedHelpers("jobs/jobfair");

export default {
  name: "JobinfoDetail",
  data() {
    return {
      he: ''
    };
  },
  methods: {
    ...mapActions(["fetch", "corp_list"]),
    btn(item) {
      let _id = item.corpid;
      let unit = this.current.unit;
      this.$router.push({ path: "/corp/" + _id, query: { tenant: unit } });
    }
  },
  mounted() {
    let id = this.$route.params.id;
    this.fetch({ id });
    this.corp_list({ id });
  },
  computed: {
    ...mapState(["current", "corp_list"])
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
  line-height: 2rem;
}
.text3 {
  color: #ff9913;
  line-height: 5em;
}
table {
  border: 1px solid #999;
  border-collapse: collapse;
}
tr {
  width: 100%;
}
td {
  border-right: 1px solid #999;
  border-bottom: 1px solid #999;
  text-align: center;
}
.th, b{line-height: 2em}
.corpname:hover{
  color: #0028aa;
}
.corpname{
  cursor: pointer;
}
.operation{
  color: #0028aa;
  cursor: pointer;
}
</style>
