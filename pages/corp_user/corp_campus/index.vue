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
              <a @click="Obtain(item)">{{item.subject}}</a>
              <el-button
                class="fd2 btn"
                type="text"
                v-if="item.status == 1"
                @click="handleUpdate(item)"
              >更改</el-button>
            </div>
            <p class="fd1">举办单位：{{item.corpname}}</p>
            <p>举办地址：{{item.address}}</p>
            <p>举办时间：{{item.date}} {{item.time}}</p>
            <p>联系电话：{{item.contact}}</p>
            <p>联系邮箱：{{item.email}}</p>
            <p>分站信息：{{item.unit}}</p>
            <p>
              <el-button type="text" @click="xq(item)">查看招聘职位</el-button>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers(
  "corp_usercampus"
);
const { mapState: log } = createNamespacedHelpers("login");
export default {
  name: "TabItemJobfair",
  data() {
    return {
      size: 0,
      pagesize: 10
    };
  },
  methods: {
    ...mapActions(["query"]),
    Obtain(item) {
      let _id = item._id;
      this.$router.push("/jobs/campus/" + _id);
    },
    xq(item) {
      let _id = item._id;
      this.$router.push("/corp_user/corp_campus/" + _id);
    },
    handleAdd(item) {

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
    ...mapState(["items"]),
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
