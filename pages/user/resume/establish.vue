<template>
  <div class="data fd2">
    <el-card class="box-card">
      <div slot="header" class="fj">
        <span class="fd1 title">标题：</span>
        <input class="fd1 input1" :placeholder="item.title" v-model="title"/>
      </div>
      <div class="item fj">
        <div class="text fd1 fj"><i class="fd1">姓名:</i> <input :placeholder="item.info.xm" class="fd1" v-model="xm" :disabled="swc"/></div>
        <div class="text fd2 fj"><i class="fd1">学历:</i> <input class="fd1" :placeholder="item.info.xl" v-model="xl" :disabled="swc"/></div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj"><i class="fd1">性别:</i> <input :placeholder="item.info.xb" class="fd1" v-model="xb" :disabled="swc"/></div>
        <div class="text fd2 fj"><i class="fd1">毕业院校:</i> <input :placeholder="item.info.yxmc" class="fd1" v-model="yxmc" :disabled="swc"/></div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj"><i class="fd1">出生日期:</i> <input :placeholder="item.info.csrq" v-model="csrq" class="fd1"/></div>
        <div class="text fd2 fj"><i class="fd1">专业名称:</i> <input :placeholder="item.info.zymc" v-model="zymc" class="fd1" :disabled="swc"/></div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj"><i class="fd1">联系方式:</i> <input :placeholder="item.contact.mobile" v-model="mobile" class="fd1"/></div>
        <div class="text fd2 fj"><i class="fd1">电子邮件:</i> <input :placeholder="item.contact.email" v-model="email"  class="fd1"/></div>
      </div>
      <textarea :placeholder="item.content"  class="item"  rows="10" cols="83" maxlength="2000" v-model="content"></textarea >
    </el-card>
    <el-button class="btn0" @click="btn">确认提交</el-button>
  </div>
</template>

<script>
import { createNamespacedHelpers,mapGetters } from 'vuex';
const { mapState, mapActions} = createNamespacedHelpers('user/resume');
export default {
  data() {
    return {
      disabled: true,
      swc: false,
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
      },
      items: null,
      open: false
    };
  },
  methods: { // 提交验证
  ...mapActions(['create','fetch','update']),
    open4(msg) {
      this.$notify({
        title: '警告',
        message: msg,
        type: 'warning'
      });
    },
    indfo () {
      let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
      if (this.title == '' && this.xm == '' && this.xl == '' && this.xb == '' && this.yxmc == '' && this.csrq == '' && this.zymc == '' && this.mobile == '' && this.content == '' && this.mobile == '') {bb
        this.open4('请填写完整信息')
        return false
      }else if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.mobile))) {
        this.open4('请填写正确的手机号')
        return false
      }else if (!reg.test(this.email)) {
        this.open4('请填写正确邮箱')
        return false
      }else { // 赋值
        this.items = {title: this.title,content: this.content,info:{xm: this.xm,xl: this.xl,xb: this.xb,yxmc: this.yxmc,csrq: this.csrq,zymc: this.zymc,},contact:{mobile: this.mobile,email: this.email}
        }
        this.open = true
      }
    },
    empty () { // 清空
      this.title = ''
      this.content = ''
      this.csrq = ''
      this.mobile = ''
      this.email = ''
      this.items = null
    },
    async btn() {
      this.indfo()
      if (this.open == true) {
        if (this.swc !== true) { // 调用新建
          try {
            let userid =  this.userinfo.userid
            let item = this.items
            const res = await this.create({
              userid:userid,
              item
            });
            if(this.$checkRes(res, '提交成功')) {
              this.$emit('scaned');
              this.empty()
              location.href = 'user/resume'
            }
          } catch (err) {
            this.$message({
              type: 'error',
              message: err.message || '提交失败',
              duration: 1000,
            });
            console.error(err);
          }
        }else { // 调用更改
          try {
            let userid =  this.userinfo.userid
            let id = this.$route.query._id
            let item = this.items
            const res2 = await this.update({
              userid: userid,
              id: id,
              item
            });
            if(this.$checkRes(res2, '提交成功')) {
              this.$emit('scaned');
              this.empty()
              location.href = 'user/resume'
            }
          } catch (err) {
            this.$message({
              type: 'error',
              message: err.message || '提交失败',
              duration: 1000,
            });
            console.error(err);
          }
        }
      }
    },
    init () { // 初始赋值
      this.xm = this.userinfo.xm
      this.xl = this.userinfo.xl
      this.xb = this.userinfo.xb
      this.yxmc = this.userinfo.yxmc
      this.zymc = this.userinfo.zymc
    }
  },
  mounted() {
    let _id = this.$route.query._id
    if (_id) {
      this.swc = true
      this.fetch({id:_id});
    }else {
      this.swc = false
    }
  },
  computed: {
    ...mapState(['createlist','current','uplist']),
    ...mapGetters(['userinfo'])
  },
  watch: {
    current: function (val) {
      if (val !== null) { // 赋值
        this.item = this.current
        this.init()
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
input{
  display: block;
  margin-left: 10%
}
.box-card {
  width: 80%;
  margin-left: 2em;
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
  padding: 3px 0;
  display: block;
  background: linear-gradient(#0097c4,#117bb0);
  color: #fff;
  text-align: center;
  padding: 8px;
  margin-left: 10%;
}
</style>