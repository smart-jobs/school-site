<template>
  <div class="data fd2">
    <br>
    <el-card class="box-card">
      <div slot="header" class="fj">
        <span class="fd1">{{fetchlist && fetchlist.corpname}}</span>
        <el-button class="fd2 btn" type="text" @click="btn2(fetch)" v-if="fair_id == ''">提交更改</el-button>
        <el-button class="fd2 btn" type="text" @click="btn3" v-else>提交新建</el-button>
      </div>
      <div class="item fj">
        <div class="text fd1 fj">
          <i class="fd1">招聘职位:</i>
          <em class="fd1">
            <el-input :placeholder="fetch && fetch.name" v-model="name"></el-input>
          </em>
        </div>
        <div class="text fd2 fj">
          <i class="fd1">招聘人数:</i>
          <em class="fd1">
            <el-input :placeholder="fetch && fetch.count" v-model="count"></el-input>
          </em>
        </div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj">
          <i class="fd1">应聘要求:</i>
          <em class="fd1">
            <el-input
              :placeholder="fetch && fetch.requirement"
              type="textarea"
              :rows="3"
              v-model="requirement"
            ></el-input>
          </em>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("user_corp/corp_fair");
const { mapState:log } = createNamespacedHelpers('login');
export default {
  data() {
    return {
      fair_id: "",
      fetch: "",
      name: "",
      count: "",
      requirement: ""
    };
  },
  methods: {
    ...mapActions(["update","add"]),
    async btn2(item) {
      try {
        let corpid = this.useinfo.corpid;
        let job_id = item._id;
        let name = this.name;
        let count = this.count;
        let requirement = this.requirement;
        if (name !== "" && count !== "" && requirement !== "") {
          const res = await this.update({
            corpid: corpid,
            job_id: job_id,
            name: name,
            count: count,
            requirement: requirement
          });
          if (this.$checkRes(res, "更改成功")) {
            this.$emit("scaned");
            this.$router.push("/user_corp/corp_fair/");
          } else {
            this.$message({
              type: "error",
              message: res.message || "更改失败",
              duration: 1000
            });
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
        let corpid = this.useinfo.corpid;
        let fair_id = this.fair_id;
        let name = this.name;
        let count = this.count;
        let requirement = this.requirement;
        if (name !== "" && count !== "" && requirement !== "") {
          const res = await this.add({
            corpid: corpid,
            fair_id: fair_id,
            name: name,
            count: count,
            requirement: requirement
          });
          if (this.$checkRes(res, "提交成功")) {
            this.$emit("scaned");
            this.$router.push("/user_corp/corp_fair/");
          } else {
            this.$message({
              type: "error",
              message: res.message || "提交失败",
              duration: 1000
            });
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
    }
  },
  mounted() {
    if (this.$route.query.fair_id) {
      this.fair_id = this.$route.query.fair_id;
    } else if (this.$route.query.index) {
      let index = this.$route.query.index;
      if (this.fetchlist !== null) {
        this.fetch = this.fetchlist.jobs[index];
      } else {
        this.$router.push("/user_corp/corp_fair/");
      }
    }
  },
  computed: {
    ...mapState(["fetchlist"]),
    ...log(['useinfo'])
  }
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
  margin: 2em auto;
}
.btn {
  padding: 3px 8px;
}
.btn0 {
  padding: 3px 0;
  margin-top: 2em;
  margin-left: 10%;
  display: block;
  text-align: left;
}
.xq {
  margin-left: 0;
}
input {
  font-size: 1em;
}
</style>