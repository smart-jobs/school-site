<template>
  <div class="data fd2">
    <el-button class="fd1 btn0" type="text" @click="btn0">添加职位</el-button>
    <br>
    <el-card class="box-card" v-for="(item,index) in jobs" :key="index">
      <div slot="header" class="fj">
        <span class="fd1">{{fetchlist && fetchlist.corpname}}</span>
        <el-button class="fd2 btn" type="text" v-if="fetchlist.status == 1" @click="btn2(item)">删除</el-button>
        <el-button class="fd2 btn" type="text" v-if="fetchlist.status == 1" @click="btn1(index)">更改</el-button>
      </div>
      <div class="item fj">
        <div class="text fd1 fj"><i class="fd1">招聘职位:</i> <em class="fd1">{{item && item.name}}</em></div>
        <div class="text fd2 fj"><i class="fd1">招聘人数:</i> <em class="fd1">{{item && item.count}}</em></div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj"><i class="fd1">应聘要求:</i> <em class="fd1">{{item && item.requirement}}</em></div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions} = createNamespacedHelpers('user_corp/corp_fair');
const { mapState:log } = createNamespacedHelpers('login');
export default {
  data() {
    return {
      jobs: null,
      useinfo: null,
    };
  },
  methods: {
    ...mapActions(['fetch','delete']),
    async btn2 (item) {
      try {
        let corpid = this.useinfo.corpid
        let job_id = item._id
        const res = await this.delete({
          corpid:corpid,
          job_id: job_id
        });
        if(this.$checkRes(res, '删除成功')) {
          this.$emit('scaned');
          let _id = this.$route.params.id
          this.fetch({corpid:corpid,fair_id:_id});
        }
      } catch (err) {
        this.$message({
          type: 'error',
          message: err.message || '删除失败',
          duration: 1000,
        });
        console.error(err);
      }
    },
    async btn1 (index) {
      this.$router.push({path:'/user_corp/corp_fair/update',query:{index:index}})
    },btn0 () {
        let fair_id = this.fetchlist.fair_id
        this.$router.push({path:'/user_corp/corp_fair/update',query:{fair_id:fair_id}})
    }
  },
  mounted() {
    let _id = this.$route.params.id
    if (this.useinfo !== null) {
      let corpid = this.useinfo.corpid
      this.fetch({corpid:corpid,fair_id:_id});
    }
  },
  computed: {
    ...mapState(['fetchlist']),
    ...log(['useinfo'])
  },
  watch: {
    fetchlist: function (val) {
        if (val !== null) {
          this.jobs = val.jobs
        }
    }
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
i{
  width: 20%;
  display: block;
  text-align-last: justify;
}
em{
  display: block;
  margin-left: 10%
}
.box-card {
  width: 80%;
  margin: 2em auto
}
.btn{
  padding: 3px 8px;
}
.btn0{
  padding: 3px 0;
  margin-top: 2em;
  margin-left: 10%;
  display: block;
  text-align: left
}
.xq{
  margin-left: 0;
}
pre{font-size: 0.8em;}
</style>