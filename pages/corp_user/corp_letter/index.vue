<template>
  <div class="data fd2">
     <p class="fj btnbox">
       <span class="fd1 btn1 btn">招聘会</span>
       <span class="fd1 btn2 btn">招聘信息</span>
       <span class="btn3 fd1"> </span>
     </p>
     <div class="contentbox fj">
       <div class="fd1"></div>
       <div class="fd1"></div>
       <div class="fd1"></div>
       <div class="fd1"></div>
       <div class="fd1"></div>
     </div>
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
      
    };
  },
  methods: {
    ...mapActions(["query"]),
  },
  mounted() {
    let corpid = this.userinfo.corpid
    this.query({corpid:corpid})
  },
  computed: {
    ...mapState(["items",'total']),
    ...log(["userinfo"])
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/jobs.less";
.btnbox{width: 100%;border: 1px solid #999;}
.btn{width: 10%;text-align: center;line-height: 2.5em;font-size: 1.2em;border-right:1px solid #999;border-bottom: 1px solid #999}
.btn3{width: 80%;border-bottom: 1px solid #999;margin-top: 3em}
</style>