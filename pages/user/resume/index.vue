<template>
  <div class="data right">
    <el-button class="btnx" type="text" @click="btn0">新建模板</el-button>
    <br>
    <el-card class="box-card" v-for="(item,index) in userlist" :key="index">
      <div slot="header" class="fj">
        <span class="left">{{item && item.title}}</span>
        <el-button class="right btn" type="text" @click="btn2(item)">删除</el-button>
        <el-button class="right btn" type="text" @click="btn1(item)">更改</el-button>
      </div>
      <div class="item fj">
        <div class="text left fj"><i class="left">姓名:</i> <em class="left">{{item | get('info.xm')}}</em></div>
        <div class="text right fj"><i class="left">学历:</i> <em class="left">{{item | get('info.xl')}}</em></div>
      </div>
      <div class="item fj">
        <div class="text left fj"><i class="left">性别:</i> <em class="left">{{item | get('info.xb')}}</em></div>
        <div class="text right fj"><i class="left">毕业院校:</i> <em class="left">{{item | get('info.yxmc')}}</em></div>
      </div>
      <div class="item fj">
        <div class="text left fj"><i class="left">出生日期:</i> <em class="left">{{item | get('info.csrq')}}</em></div>
        <div class="text right fj"><i class="left">专业名称:</i> <em class="left">{{item | get('info.zymc')}}</em></div>
      </div>
      <div class="item fj">
        <div class="text left fj"><i class="left">联系方式:</i> <em class="left">{{item | get('contact.mobile')}}</em></div>
        <div class="text right fj"><i class="left">电子邮件:</i> <em class="left">{{item | get('contact.email')}}</em></div>
      </div>
      <el-button class="btn0 xq" type="text" @click="xq(item)">查看详情</el-button>
    </el-card>
  </div>
</template>

<script>
import { createNamespacedHelpers,mapGetters } from 'vuex';
const { mapState, mapActions} = createNamespacedHelpers('user/resume');
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
    ...mapGetters(['userinfo'])
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
  margin-bottom: 2em;
}
.btn{
  padding: 3px 8px;
}
.btn0{
  padding: 3px 0;
  display: block;
  text-align: left
}
.btnx{
  padding: 3px 0;
  display: block;
  background: linear-gradient(#0097c4,#117bb0);
  color: #fff;
  text-align: center;
  padding: 8px;
}
.xq{
  margin-left: 0;
}
</style>