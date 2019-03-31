<template>
  <div class="data right">
    <br>
    <el-card class="box-card">
      <div slot="header" class="fj">
        <span class="left">{{current && current.title}}</span>
        <el-button class="right btn" type="text" @click="btn2(item)">删除</el-button>
        <el-button class="right btn" type="text" @click="btn1(item)">更改</el-button>
      </div>
      <div class="item fj">
        <div class="text left fj"><i class="left">姓名:</i> <em class="left">{{current | get('info.xm')}}</em></div>
        <div class="text right fj"><i class="left">学历:</i> <em class="left">{{current | get('info.xl')}}</em></div>
      </div>
      <div class="item fj">
        <div class="text left fj"><i class="left">性别:</i> <em class="left">{{current | get('info.xb')}}</em></div>
        <div class="text right fj"><i class="left">毕业院校:</i> <em class="left">{{current | get('info.yxmc')}}</em></div>
      </div>
      <div class="item fj">
        <div class="text left fj"><i class="left">出生日期:</i> <em class="left">{{current | get('info.csrq')}}</em></div>
        <div class="text right fj"><i class="left">专业名称:</i> <em class="left">{{current | get('info.zymc')}}</em></div>
      </div>
      <div class="item fj">
        <div class="text left fj"><i class="left">联系方式:</i> <em class="left">{{current | get('contact.mobile')}}</em></div>
        <div class="text right fj"><i class="left">电子邮件:</i> <em class="left">{{current | get('contact.email')}}</em></div>
      </div>
      <pre>{{current && current.content}}</pre>
    </el-card>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions} = createNamespacedHelpers('user/resume');
export default {
  data() {
    return {
      
    };
  },
  methods: {
    ...mapActions(['fetch','delete']),
    btn1 (item) {
      let _id = item._id
      this.$router.push({
        path: '/user/resume/establish',
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
          location.href = 'user/resume'
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
    let _id = this.$route.query._id
    this.fetch({id: _id});
  },
  computed: {
    ...mapState(['current']),
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