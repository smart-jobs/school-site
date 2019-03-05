<template>
  <div class="details">
    <p class="title fj">
      <span class="fd1">{{current && current.title}}</span>
      <no-ssr>
      
      </no-ssr>
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
    <br>
    <el-select v-if="role == 'user'" v-model="resumeid" placeholder="请选择简历" class="fd1 btn"><el-option :label="item.title" :value="item._id" v-for="(item,index) in userlist" :key="index"></el-option></el-select>
    <el-button class="fd1 btn0" v-if="role == 'user'" @click="delivery">投递简历</el-button>
  </div>
</template>

<script>
import { createNamespacedHelpers, mapGetters } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("jobs/jobinfo");
const { mapActions: resume,mapState:maplist } = createNamespacedHelpers("user/resume");
const { mapActions: actions } = createNamespacedHelpers("user/letter");
export default {
  name: "JobinfoDetail",
  data() {
    return {
      visible2: false,
      info: '',
      resumeid:''
    };
  },
  methods: {
    ...mapActions(["fetch"]),
    ...resume(['query']),
    ...actions(['deliver']),
    async delivery() {
      try {
        if (this.resumeid !== '') {
          let userid = this.userinfo.userid
          let corpid = this.current.corpid
          let resumeid = this.resumeid
          let origin = this.current._id
          const res = await this.deliver({
            corpid: corpid,
            userid: userid,
            resumeid: resumeid,
            type: '0',
            origin: origin
          });
          if (this.$checkRes(res, "投递成功")) {
          } 
        }else {
          this.$message({
            type: "error",
            message: "请先选择简历模板",
            duration: 1000
          });
        }
      }catch (err) {
        this.$message({
          type: "error",
          message: err.message || "提交失败",
          duration: 1000
        });
      }
    },
  },
  mounted() {
    let id = this.$route.params.id;
    this.fetch({ id });
    if (this.userinfo !== null) {
      let userid = this.userinfo.userid
      this.query({userid:userid})
    }
  },
  computed: {
    ...mapState(["current"]),
    ...maplist(['userlist']),
    ...mapGetters(['userinfo']),
    role() {
      return this.userinfo && this.userinfo.role;
    }
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
