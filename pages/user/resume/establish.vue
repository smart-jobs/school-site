<template>
  <div class="data fd2">
    <el-card class="box-card">
      <div slot="header" class="fj">
        <span class="fd1 title">标题：</span>
        <input class="fd1 input1" :placeholder="item.title" v-model="title"/>
      </div>
      <div class="item fj">
        <div class="text fd1 fj"><i class="fd1">姓名:</i> <input :placeholder="item.info.xm" class="fd1" v-model="xm" :disabled="disabled"/></div>
        <div class="text fd2 fj"><i class="fd1">学历:</i> <input class="fd1" :placeholder="item.info.xl" v-model="xl" :disabled="disabled"/></div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj"><i class="fd1">性别:</i> <input :placeholder="item.info.xb" class="fd1" v-model="xb" :disabled="disabled"/></div>
        <div class="text fd2 fj"><i class="fd1">毕业院校:</i> <input :placeholder="item.info.yxmc" class="fd1" v-model="yxmc" :disabled="disabled"/></div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj"><i class="fd1">出生日期:</i> <input :placeholder="item.info.csrq" v-model="csrq" class="fd1"/></div>
        <div class="text fd2 fj"><i class="fd1">专业名称:</i> <input :placeholder="item.info.zymc" v-model="zymc" class="fd1" :disabled="disabled"/></div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj"><i class="fd1">联系方式:</i> <input :placeholder="item.contact.mobile" v-model="mobile" class="fd1"/></div>
        <div class="text fd2 fj"><i class="fd1">电子邮件:</i> <input :placeholder="item.contact.email" v-model="email"  class="fd1"/></div>
      </div>
      <textarea :placeholder="item.content"  class="item"  rows="10" cols="83" maxlength="2000" v-model="content"></textarea >
    </el-card>
    <el-button class="btn0" type="success" @click="btn">确认提交</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disabled: false,
      title: '',
      xm: '',
      xl: '',
      xb: '',
      yxmc: '',
      csrq: '',
      zymc: '',
      mobile: '',
      email: '',
      content: '',
      item:{
        title: '请输入标题',
        content: '请输入简介,最多字数2000',
        info:{
          xm:'请输入姓名',
          xl:'请输入学历',
          xb:'请输入性别',
          yxmc:'请输入毕业院校',
          csrq:'例：2019-01-01',
          zymc:'请输入专业',
        },
        contact:{
          mobile:'请输入联系方式',
          email:'请输入邮箱地址'
        }
      }
    };
  },
  methods: { // 提交验证
    btn () {
      if (email) {

      }
    }
  },
  mounted() {
    let _id = this.$route.query._id
    if (_id) {
      this.disabled = true
      console.log('发请求')
    }
  },
  computed: {}
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
input{
  display: block;
  margin-left: 10%
}
.box-card {
  width: 80%;
  margin: 2em auto
}
.input1{
  margin-left: 3%
}
textarea {
  text-indent: 2em;
  line-height: 1.8em;
}
.title{
  width: 11.5%;
  display: block;
  text-align-last: justify;
}
.btn0{
  padding: 10px;
  margin-left: 10%;
  display: block;
  text-align: left;
  margin-bottom: 5%;
  font-size: 1.2em;
}
</style>