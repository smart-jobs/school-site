<template>
  <div class="data right">
    <p class="fj btnbox">
      <span class="left btn1 btn" :class="{b:btn==true}" @click="fair">招聘会</span>
      <span class="left btn2 btn" :class="{b:btn==false}" @click="info">招聘信息</span>
      <span class="btn3 left"></span>
      <br>
      <el-card class="box-card" v-for="(item, index) in items" :key="index">
        <div slot="header" class="fj">
          <span class="left">{{ item && item.title }}</span>
          <el-button v-if="!item.reply" class="right" type="primary" @click="Reply(item)">查看详情</el-button>
        </div>
        <div class="item fj">
          <div class="text left fj">
            <i class="left">姓名:</i>
            <em class="left">{{ item | get('info.xm') }}</em>
          </div>
          <div class="text right fj">
            <i class="left">性别:</i>
            <em class="left">{{ item | get('info.xb') }}</em>
          </div>
        </div>
        <div class="item fj">
          <div class="text left fj">
            <i class="left">出生日期:</i>
            <em class="left">{{ item | get('info.csrq') }}</em>
          </div>
          <div class="text right fj">
            <i class="left">学历:</i>
            <em class="left">{{ item | get('info.xl') }}</em>
          </div>
        </div>
        <div class="item fj">
          <div class="text left fj">
            <i class="left">学校:</i>
            <em class="left">{{ item | get('info.yxmc') }}</em>
          </div>
          <div class="text right fj">
            <i class="left">专业:</i>
            <em class="left">{{ item | get('info.zymc') }}</em>
          </div>
        </div>
      </el-card>
      <no-ssr>
        <el-pagination
          class="pv"
          @current-change="handleCurrentChange"
          :current-page.sync="size"
          :page-size="pagesize"
          layout="prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </no-ssr>
    </p>
  </div>
</template>

<script>
import { createNamespacedHelpers,mapGetters } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers(
  "corp_user/corp_letter"
);
export default {
  data() {
    return {
      btn: true,
      requirement: "",
      size: 1,
      pagesize: 10,
      type: "0"
    };
  },
  methods: {
    ...mapActions(["query",'reply']),
    handleCurrentChange(val) {
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
      this.type = "1";
      let corpid = this.userinfo.corpid;
      this.btn = true;
      let type = this.type;
      let size = this.size
      let pagesize = this.pagesize
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
      let size = this.size
      let pagesize = this.pagesize
      this.query({
        corpid: corpid,
        type: type,
        size: size,
        pagesize: pagesize
      });
    },
    async Reply(item) {
      let id = item._id
      this.$router.push('/corp_user/corp_letter/'+id)
    }
  },
  mounted() {
    let corpid = this.userinfo.corpid;
    let size = this.size
    let pagesize = this.pagesize
    this.query({ corpid: corpid, type: '1',size: size, pagesize: pagesize });
  },
  computed: {
    ...mapState(["items", "total"]),
    ...mapGetters(["userinfo"]),
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/jobs.less";
.btnbox {
  width: 100%;
  border: 1px solid #ddd;
}
.btn {
  width: 10%;
  text-align: center;
  line-height: 2.5em;
  font-size: 1.2em;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.btn3 {
  width: 80%;
  border-bottom: 1px solid #ddd;
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
.pv{
  margin: 2rem auto;
  width: 80%;
}
</style>