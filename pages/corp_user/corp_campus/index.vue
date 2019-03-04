<template>
  <div class="fd2 data">
    <el-button class="fd1 btn0" type="text" @click="handleAdd">添加宣讲会</el-button>
    <br>
    <ul>
      <li class="fj" v-for="(item,index) in items" :key="index">
        <div class="fd1 fj txtbox">
          <img src="/img/logo1.jpg" class="img fd1">
          <div class="fd1 titbox">
            <div class="fj">
              <a @click="Obtain(item)" class="fd1">{{item.subject}}</a>
              <el-button
                class="fd2 btn"
                type="text"
                v-if="item.status == 1"
                @click="handleUpdate(item)"
              >更改</el-button>
            </div>
            <p class="fd1">举办单位：{{item.corpname}}</p>
            <p>分站信息：{{item.unit}}</p>
            <p>
            </p>
          </div>
        </div>
      </li>
    </ul>
    <el-pagination class="pv" @current-change="handleCurrentChange" :current-page.sync="size" :page-size="pagesize"
                   layout="prev, pager, next, jumper" :total="total">
    </el-pagination>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers(
  "corp_user/corp_campus"
);
const { mapState: log } = createNamespacedHelpers("login");
export default {
  name: "TabItemJobfair",
  data() {
    return {
      size: 0,
      pagesize: 10,
    };
  },
  methods: {
    ...mapActions(["query"]),
    handleCurrentChange(val) {
      let corpid = this.userinfo.corpid;
      this.size = val
      this.query({ corpid: corpid, size: val, pagesize: this.pagesize });
    },
    Obtain(item) {
      let _id = item._id;
      this.$router.push("/jobs/campus/" + _id);
    },
    handleAdd(item) {
      this.$router.push("/corp_user/corp_campus/updata")
    },
    handleUpdate (item) {
      let _id = item._id;
      this.$router.push({path:"/corp_user/corp_campus/updata",query:{id:_id}});
    }
  },
  mounted() {
    if (this.userinfo !== null) {
      let corpid = this.userinfo.corpid;
      let size = this.size;
      let pagesize = this.pagesize;
      this.query({ corpid: corpid, size: size, pagesize: pagesize });
    }
  },
  computed: {
    ...mapState(["items",'total']),
    ...log(["userinfo"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "~@/assets/jobs.less";
.titbox {
  width: 90%;
}
.btn0 {
  padding: 3px 0;
  margin-top: 1em;
  margin-left: 3%;
  display: block;
  text-align: left;
}
</style>
