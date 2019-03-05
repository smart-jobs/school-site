<template>
  <div class="data fd2">
    <el-card class="box-card">
      <div slot="header" class="fj">
        <span class="fd1">{{ currents && currents.title }}</span>
        <el-button v-if="currents && !currents.reply" class="fd2 c" type="primary" @click="Reply(item)">拒绝用户</el-button>
        <el-button v-if="currents && !currents.reply" class="fd2" type="primary" @click="Reply(item)">回复消息</el-button>
      </div>
      <div class="item fj">
        <div class="text fd1 fj">
          <i class="fd1">姓名:</i>
          <em class="fd1">{{ currents | get('info.xm') }}</em>
        </div>
        <div class="text fd2 fj">
          <i class="fd1">性别:</i>
          <em class="fd1">{{ currents | get('info.xb') }}</em>
        </div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj">
          <i class="fd1">出生日期:</i>
          <em class="fd1">{{ currents | get('info.csrq') }}</em>
        </div>
        <div class="text fd2 fj">
          <i class="fd1">学历:</i>
          <em class="fd1">{{ currents | get('info.xl') }}</em>
        </div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj">
          <i class="fd1">学校:</i>
          <em class="fd1">{{ currents | get('info.yxmc') }}</em>
        </div>
        <div class="text fd2 fj">
          <i class="fd1">专业:</i>
          <em class="fd1">{{ currents | get('info.zymc') }}</em>
        </div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj">
          <i class="fd1">联系电话:</i>
          <em class="fd1">{{ currents | get('contact.mobile') }}</em>
        </div>
        <div class="text fd2 fj">
          <i class="fd1">联系邮箱:</i>
          <em class="fd1">{{ currents | get('contact.email') }}</em>
        </div>
      </div>
      <el-input v-if="currents && !currents.reply" placeholder="请输入回复信息" type="textarea" :rows="5" v-model="requirement"></el-input>
      <p class="text" v-else>
          <span class="title">回复信息:</span>
          {{ currents && currents.reply }}
        </p>
    </el-card>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers(
  "corp_user/corp_letter"
);
const { mapState: log } = createNamespacedHelpers("login");
export default {
  data() {
    return {
      requirement: "",
      type: "0"
    };
  },
  methods: {
    ...mapActions(["reply", "fetch"]),
    handleCurrentChange(val) {
      this.type = "0";
      let corpid = this.userinfo.corpid;
      this.size = val;
      let type = this.type;
      this.query({
        corpid: corpid,
        type: type,
        size: val,
        pagesize: this.pagesize
      });
    },
    fair() {
      this.type = "0";
      let corpid = this.userinfo.corpid;
      this.btn = true;
      let type = this.type;
      this.query({
        corpid: corpid,
        type: type,
        size: size,
        pagesize: pagesize
      });
    },
    info() {
      this.type = "0";
      let corpid = this.userinfo.corpid;
      let type = this.type;
      this.btn = false;
      this.query({
        corpid: corpid,
        type: type,
        size: size,
        pagesize: pagesize
      });
    },
    async Reply(item) {
      let reply = this.requirement;
      if (reply !== "") {
        let id = item._id;
        let corpid = this.userinfo.corpid;
        const res = await this.reply({
          corpid: corpid,
          id: id,
          reply: reply,
          status: "1"
        });
        if (this.$checkRes(res, "回复成功")) {
          let corpid = this.userinfo.corpid;
          let type = this.type;
          this.query({ corpid: corpid, type: type });
        }
      } else {
        this.$message({
          type: "error",
          message: "请填写回复信息",
          duration: 1000
        });
      }
    },
    async refuse() {
      let reply = this.requirement;
      if (reply !== "") {
        let id = item._id;
        let corpid = this.userinfo.corpid;
        const res = await this.reply({
          corpid: corpid,
          id: id,
          reply: reply,
          status: "2"
        });
        if (this.$checkRes(res, "回复成功")) {
          let corpid = this.userinfo.corpid;
          let type = this.type;
          this.query({ corpid: corpid, type: type });
        }
      } else {
        this.$message({
          type: "error",
          message: "请填写拒绝理由",
          duration: 1000
        });
      }
    }
  },
  mounted() {
    let id = this.$route.params.id;
    this.fetch({ id: id });
  },
  computed: {
    ...mapState(["currents"]),
    ...log(["userinfo"])
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/jobs.less";
.btnbox {
  width: 100%;
  border: 1px solid #999;
}
.btn {
  width: 10%;
  text-align: center;
  line-height: 2.5em;
  font-size: 1.2em;
  border-right: 1px solid #999;
  border-bottom: 1px solid #999;
}
.btn3 {
  width: 80%;
  border-bottom: 1px solid #999;
  margin-top: 3em;
}
.box-card {
  width: 80%;
  margin: 5% auto;
}
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
.b {
  border-bottom: none;
}
.pv {
  margin: 2rem auto;
  width: 80%;
}
.c {
  margin-left: 3%;
}
.title{
  line-height: 2.5em;
  font-weight: 600
}
</style>