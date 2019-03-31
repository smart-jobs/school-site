<template>
  <div class="data right">
    <el-card class="box-card">
      <div slot="header" class="fj">
        <span class="left">{{dataForm && dataForm.corpname}}</span>
        <el-button class="right btn" type="text" @click="change" v-if="dataId !== undefined">提交更改</el-button>
        <el-button class="right btn" type="text" @click="btn3" v-else>提交新建</el-button>
      </div>
      <div class="item fj">
        <div class="text left fj">
          <i class="left">宣讲标题:</i>
          <em class="left">
            <el-input v-model="dataForm.subject"></el-input>
          </em>
        </div>
        <div class="text right fj">
          <i class="left">举办地址:</i>
          <em class="left">
            <el-input v-model="dataForm.address"></el-input>
          </em>
        </div>
      </div>
      <div class="item fj">
        <div class="text left fj">
          <i class="left">开始日期:</i>
          <em class="left">
            <el-input v-model="dataForm.date"></el-input>
          </em>
        </div>
        <div class="text right fj">
          <i class="left">开始时间:</i>
          <em class="left">
            <el-input v-model="dataForm.time"></el-input>
          </em>
        </div>
      </div>
      <div class="item fj">
        <div class="text left fj">
          <i class="left">联系电话:</i>
          <em class="left">
            <el-input v-model="dataForm.contact"></el-input>
          </em>
        </div>
        <div class="text right fj">
          <i class="left">联系邮箱:</i>
          <em class="left">
            <el-input v-model="dataForm.email"></el-input>
          </em>
        </div>
      </div>
      <div class="item fj">
        <div class="text left fj">
          <i class="left">宣讲内容:</i>
          <em class="left">
            <el-input type="textarea" :rows="3" v-model="dataForm.content"></el-input>
          </em>
        </div>
      </div>
      <div class="item fj">
        <h2 class="left">招聘职位</h2>
        <el-button class="left btn h2" type="text" @click="tj">添加职位</el-button>
      </div>
      <div class="item" v-for="(item, index) in dataForm && dataForm.jobs" :key="index">
        <el-button class="bt0" type="text" @click="shanchu(index)">删除职位</el-button>
        <br>
        <div class="item fj">
          <div class="text left fj">
            <i class="left">职位名称:</i>
            <em class="left">
              <el-input v-model="item.name"></el-input>
            </em>
          </div>
          <div class="text right fj">
            <i class="left">招聘人数:</i>
            <em class="left">
              <el-input v-model="item.count"></el-input>
            </em>
          </div>
        </div>
        <div class="item fj">
          <div class="text left fj">
            <i class="left">职位需求:</i>
            <em class="left">
              <el-input type="textarea" :rows="3" v-model="item.requirement"></el-input>
            </em>
          </div>
        </div>
        <br>
      </div>
    </el-card>
  </div>
</template>

<script>
import { createNamespacedHelpers,mapGetters } from "vuex";
const { mapActions, mapMutations } = createNamespacedHelpers(
  "corp_user/corp_campus"
);
export default {
  data() {
    return {
      dataForm: {
        subject: "宣讲会名称",
        address: "宣讲会地址",
        contact: "联系电话",
        content: "宣讲内容",
        date: "格式：2020-03-04",
        email: "联系邮箱",
        time: "格式：12：12",
        jobs: []
      }
    };
  },
  methods: {
    ...mapActions(["update", "add", "fetch"]),
    ...mapMutations(["jobsadd", "jobsdelete"]),
    async change() {
      try {
        let corpid = this.userinfo.corpid;
        let id = this.dataId;
        if (this.dataForm.subject !== ''&&this.dataForm.address !== ''&&this.dataForm.contact !== ''&&this.dataForm.content !== ''&&this.dataForm.date !== ''&&this.dataForm.email !== ''&&this.dataForm.time !== '') {
          let dataForm = this.dataForm
          const res = await this.update({
            corpid: corpid,
            id: id,
            dataForm
          });
          if (this.$checkRes(res, "更改成功")) {
            this.$router.push("/corp_user/corp_campus/");
          }
        } else {
          this.$message({
            type: "error",
            message: "请填写完整信息",
            duration: 1000
          });
        }
      } catch (err) {
        this.$message({
          type: "error",
          message: err.message || "更改失败",
          duration: 1000
        });
        console.error(err);
      }
    },
    async btn3() {
      try {
        let corpid = this.userinfo.corpid;
        if (this.dataForm.subject !== ''&&this.dataForm.address !== ''&&this.dataForm.contact !== ''&&this.dataForm.content !== ''&&this.dataForm.date !== ''&&this.dataForm.email !== ''&&this.dataForm.time !== '') {
          let dataForm = this.dataForm
          const res = await this.add({
            corpid: corpid,
            dataForm
          });
          if (this.$checkRes(res, "提交成功")) {
            this.$router.push("/corp_user/corp_campus/");
          } 
        } else {
          this.$message({
            type: "error",
            message: "请填写完整信息",
            duration: 1000
          });
        }
      } catch (err) {
        this.$message({
          type: "error",
          message: err.message || "提交失败",
          duration: 1000
        });
        console.error(err);
      }
    },
    tj() {
      if (this.dataForm.jobs == null) {
        this.dataForm.jobs = new Array()
        this.dataForm.jobs.push({ count: "", name: "", requirement: "" });
      }else {
        this.dataForm.jobs.push({ count: "", name: "", requirement: "" });
      }
    },
    shanchu(index) {
      if (this.dataForm.jobs.length > 0) {
        this.dataForm.jobs.splice(index, 1);
      }
    },
  },
  async mounted() {
    if (this.dataId) {
      const res = await this.fetch({ id: this.dataId});
      if(this.$checkRes(res)){
        this.dataForm = res.data;
      }
    }
  },
  computed: {
    ...mapGetters(["userinfo"]),
    dataId() {
      return this.$route.query.id;
    }
  },
};
</script>

<style lang="less" scoped>
.text {
  font-size: 14px;
  width: 50%;
}

.item {
  margin-bottom: 18px;
}
i {
  width: 20%;
  display: block;
  text-align-last: justify;
}
em {
  display: block;
  margin-left: 10%;
}
.box-card {
  width: 80%;
  margin-left: 2em;
}
.btn {
  padding: 3px 8px;
}
.btn0 {
  padding: 3px 0;
  margin-top: 2em;
  //   margin-left: 3%;
  display: block;
  text-align: left;
}
.xq {
  margin-left: 0;
}
input {
  font-size: 1em;
}
h2 {
  font-size: 1.2em;
  line-height: 2.5em;
  margin-bottom: 5%;
}
.h2 {
  margin-top: 2%;
  margin-left: 3%;
}
</style>