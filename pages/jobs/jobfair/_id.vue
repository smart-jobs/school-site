<template>
  <div class="data fd2">
    <div class="main">
      <p class="title">{{current && current.subject}}</p>
      <p class="text">分校信息：{{current && current.unit}}</p>
      <p class="text">举办时间：{{current && current.date+ ' '+current.time}}</p>
      <p class="text">举办城市：{{current | get('city.name')}}</p>
      <p class="text">举办地址：{{current && current.address}}</p>
      <div class="btn-group">
        <el-button type="primary" size="medium" @click="add2">学生报名参加</el-button>
        <el-button type="primary" size="medium" @click="add">企业预定展位</el-button>
      </div>
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
                <td width="150" class="operation" :rowspan="item.jobs.length">
                  <span v-if="role == 'user'" @click="delivery(num)">投递简历</span>
                </td>
                <td
                  width="300"
                  class="th corpname"
                  :rowspan="item.jobs.length"
                  @click="btn(item)"
                >{{corp_list && item.corpname}}</td>
              </template>
              <td width="300" class="th">{{job.name}}</td>
              <td width="150" class="th">{{job.count}}</td>
              <td width="300">{{job.requirement}}</td>
            </tr>
          </template>
        </tbody>
      </table>
      <!-- 简历模板 -->
      <el-dialog
        title="请选择简历模板"
        :visible.sync="dialogVisible"
        width="30%"
        :modal-append-to-body="false"
      >
        <el-select v-if="role == 'user'" v-model="resumeid" placeholder="请选择简历" class="fd1 btn">
          <el-option
            :label="item.title"
            :value="item._id"
            v-for="(item,index) in userlist"
            :key="index"
          ></el-option>
        </el-select>
        <br>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleClose">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 招聘信息 -->
      <el-dialog
        title="添加职位信息"
        :visible.sync="recruit"
        width="30%"
        :modal-append-to-body="false"
      >
        <el-button type="primary" size="medium" @click="addzw">添加职位</el-button>
        <el-input class="input" type="text" v-model="jobs[0].name" placeholder="请输入职位名称"></el-input>
        <el-input class="input" type="text" v-model="jobs[0].count" placeholder="请输入招聘人数"></el-input>
        <el-input class="input" :rows="5" type="textarea" v-model="jobs[0].requirement" placeholder="请输入招聘要求"></el-input>
        <div class="txtbox" v-for="(item,index) in jobs" :key="index">
          <h1 v-if="index !== 0">职位{{index}}</h1>
          <div class="nametxt" v-if="index !== 0">职位名称：{{item.name}}</div>
          <div class="nametxt" v-if="index !== 0">招聘人数：{{item.count}}</div>
          <div class="nametxt" v-if="index !== 0">职位详情：{{item.requirement}}</div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="recruit = false">取 消</el-button>
          <el-button type="primary" @click="recruitadd">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers, mapGetters } from "vuex";

const { mapActions, mapState } = createNamespacedHelpers("jobs/jobfair");
const { mapActions: resume, mapState: maplist } = createNamespacedHelpers(
  "user/resume"
);
const { mapActions: actions } = createNamespacedHelpers("user/letter");
export default {
  name: "JobinfoDetail",
  data() {
    return {
      dialogVisible: false,
      recruit: false,
      resumeid: "",
      idx: "",
      corp: "",
      user: "",
      jobs:[
        {name: "", count: "", requirement: ""}
      ]
    };
  },
  methods: {
    ...mapActions(["fetch", "corplist", "corp_apply", "user_apply"]),
    ...resume(["query"]),
    ...actions(["deliver"]),
    btn(item) {
      let _id = item.corpid;
      let unit = this.current.unit;
      this.$router.push({ path: "/corp/" + _id, query: { tenant: unit } });
    },
    delivery(num) {
      this.dialogVisible = true;
      this.idx = num;
    },
    async handleClose() {
      try {
        if (this.resumeid !== "") {
          let userid = this.userinfo.userid;
          let corpid = this.corp_list[this.idx].corpid;
          let resumeid = this.resumeid;
          let origin = this.current._id;
          const res = await this.deliver({
            corpid: corpid,
            userid: userid,
            resumeid: resumeid,
            type: "1",
            origin: origin
          });
          if (this.$checkRes(res, "投递成功")) {
            this.dialogVisible = false;
          }
        } else {
          this.$message({
            type: "error",
            message: "请先选择简历模板",
            duration: 1000
          });
        }
      } catch (err) {
        this.$message({
          type: "error",
          message: err.message || "提交失败",
          duration: 1000
        });
      }
    },
    addzw () {
      console.log(this.jobs)
      if (this.jobs[0].name !== '' && this.jobs[0].count !== ''&& this.jobs[0].requirement !== '') {
        this.jobs.unshift({name: "", count: "", requirement: ""})
      }else{
        this.$notify({
          title: '警告',
          message: '请先填写完成上一条信息',
          type: 'warning'
        });
      }
    },
    add() {
        this.recruit = true
    },
     async add2 () {
       if (this.userinfo.role == 'user') {
        let fair_id = this.current._id
        let userid = this.userinfo.userid;
        const res = await this.user_apply({ userid: userid, fair_id: fair_id });
        this.$checkRes(res, "报名成功")
       }else{
         this.$notify.error({
          title: '错误',
          message: '您不是学生用户',
        });
       }
    },
    async recruitadd () {
      let fair_id = this.current._id
      let corpid = this.userinfo.corpid;
      let jobs = this.jobs
      const res = await this.corp_apply({ corpid: corpid, fair_id: fair_id, jobs });
      this.$checkRes(res, "申请成功")
      this.recruit = false;
    }
  },
  mounted() {
    let id = this.$route.params.id;
    this.fetch({ id });
    this.corplist({ id });
    if (this.userinfo !== null) {
      let userid = this.userinfo.userid;
      this.query({ userid: userid });
    }
  },
  computed: {
    ...mapState(["current", "corp_list"]),
    ...mapGetters(["userinfo"]),
    ...maplist(["userlist"]),
    role() {
      return this.userinfo && this.userinfo.role;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.main {
  width: 90%;
  margin: 0 auto;
}
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
  line-height: 3em;
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
.th,
b {
  line-height: 2em;
}
.corpname:hover {
  color: #0028aa;
}
.corpname {
  cursor: pointer;
}
.operation {
  color: #0028aa;
  cursor: pointer;
}
.btn-group {
  padding: 10px;
}
.input{width: 100%;margin: 1em auto;display: block;}
.txtbox{width: 100%;margin: 1em auto;}
.txtname{width: 100%;text-align: left;line-height: 1.5em;}
h1{font-size: 1.2em;font-weight: 600;}
</style>
