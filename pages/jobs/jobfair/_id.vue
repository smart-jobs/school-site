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
            <b>序号</b>
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
        <tr v-for="(item,index) in enterprise" :key="index">
          <td width="150" :rowspan="item.jobs.length">{{index+1}}</td>
          <td width="300" class="th" :rowspan="item.jobs.length">{{enterprise && item.corpname}}</td>
          <td width="750">
            <div v-for="(i,idx) in item.jobs" :key="idx" class="fj tbox" :class="{p2:idx == 0}">
              <i class="p1 t1 fd1">{{i.name}}</i>
              <i class="p1 t2 fd1">{{i.count}}</i>
              <p class="p3 t1 fd1">{{i.requirement}}</p>
            </div>
          </td>
        </tr>
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
    ...mapActions(["fetch", "ets"]),
    btn(item) {
      let _id = item.corpid;
      let unit = this.current.unit;
      this.$router.push({ path: "/corp/" + _id, query: { tenant: unit } });
    }
  },
  mounted() {
    let id = this.$route.params.id;
    this.fetch({ id });
    this.ets({ id });
  },
  computed: {
    ...mapState(["current", "enterprise"])
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
.box {
  width: 100%;
  border: 1px solid #999;
}
table {
  border: 1px solid #999;
  border-collapse: collapse;
}
tr {
  width: 100%;
  display: block;
}
td {
  border-right: 1px solid #999;
  border-bottom: 1px solid #999;
  text-align: center;
  // padding: 4px;
}
.p1 {
  line-height: 2em;
  width: 100%;
  display: inline-block;
  vertical-align: text-top;
}
.t1{width: 298px;border-right: 1px solid #000;}
.t2{width: 150px;border-right: 1px solid #000;}
.tbox{width: 100%;border-top: 1px solid #999;}
.p3{border-right:none;vertical-align: text-top;display: inline-block;}
.p2 {border-top: none;}
thead td{line-height: 2em}
</style>
