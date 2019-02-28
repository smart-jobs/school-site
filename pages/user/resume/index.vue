<template>
  <div class="data fd2">
    <el-button class="btn0" type="text" @click="btn0">新建模板</el-button>
    <br>
    <el-card class="box-card" v-for="(item,index) in userlist" :key="index">
      <div slot="header" class="fj">
        <span class="fd1">{{item && item.title}}</span>
        <el-button class="fd2 btn" type="text" @click="btn2(item)">删除</el-button>
        <el-button class="fd2 btn" type="text" @click="btn1(item)">更改</el-button>
      </div>
      <div class="item fj">
        <div class="text fd1 fj"><i class="fd1">姓名:</i> <em class="fd1">{{item | get('info.xm')}}</em></div>
        <div class="text fd2 fj"><i class="fd1">学历:</i> <em class="fd1">{{item | get('info.xl')}}</em></div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj"><i class="fd1">性别:</i> <em class="fd1">{{item | get('info.xb')}}</em></div>
        <div class="text fd2 fj"><i class="fd1">毕业院校:</i> <em class="fd1">{{item | get('info.yxmc')}}</em></div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj"><i class="fd1">出生日期:</i> <em class="fd1">{{item | get('info.csrq')}}</em></div>
        <div class="text fd2 fj"><i class="fd1">专业名称:</i> <em class="fd1">{{item | get('info.zymc')}}</em></div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj"><i class="fd1">联系方式:</i> <em class="fd1">{{item | get('contact.mobile')}}</em></div>
        <div class="text fd2 fj"><i class="fd1">电子邮件:</i> <em class="fd1">{{item | get('contact.email')}}</em></div>
      </div>
      <el-button class="btn0 xq" type="text" @click="xq(item)">查看详情</el-button>
    </el-card>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions} = createNamespacedHelpers('user/resume');
const { mapState:log } = createNamespacedHelpers('login');
export default {
  data() {
    return {
      
    };
  },
  methods: {
    ...mapActions(['query','delete']),
    btn0 () {
      location.href = 'user/resume/establish'
    },
    btn1 (item) {
      let _id = item._id
      this.$router.push({
        path: '/user/resume/establish',
        query: {
          _id:_id
        }
      })
    },
    xq (item) {
      let _id = item._id
      this.$router.push({
        path: '/user/resume/detailed',
        query: {
          _id:_id
        }
      })
    },
    async btn2 (item) {
      try {
        let userid =  this.userinfo.userid
        let id = item._id
        const res = await this.delete({
          userid:userid,
          id: id
        });
        if(this.$checkRes(res, '删除成功')) {
          this.$emit('scaned');
          this.query({userid:userid});
        }
      } catch (err) {
        this.$message({
          type: 'error',
          message: err.message || '删除失败',
          duration: 1000,
        });
        console.error(err);
      }
    }
  },
  mounted() {
    let userid =  this.userinfo.userid
    this.query({userid:userid});
  },
  computed: {
    ...mapState(['userlist']),
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
</style>