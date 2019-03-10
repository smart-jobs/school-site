<template>
  <div class="data fd2">
    <br>
    <el-card class="box-card">
      <div slot="header" class="fj">
        <span class="fd1">{{myfetch && myfetch.title}}</span>
        <div class="text fd2 fj"><i class="fd1">状态:</i> <em class="fd1">{{myfetch | statusy}}</em></div>
      </div>
       <div class="item fj">
        <div class="text fd1 fj"><i class="fd1">企业名称:</i> <em class="fd1">{{myfetch && myfetch.corpname}}</em></div>
        <div class="text fd2 fj"><i class="fd1">类别:</i> <em class="fd1">{{myfetch | type1}}</em></div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj"><i class="fd1">姓名:</i> <em class="fd1">{{myfetch | get('info.xm')}}</em></div>
        <div class="text fd2 fj"><i class="fd1">学历:</i> <em class="fd1">{{myfetch | get('info.xl')}}</em></div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj"><i class="fd1">性别:</i> <em class="fd1">{{myfetch | get('info.xb')}}</em></div>
        <div class="text fd2 fj"><i class="fd1">毕业院校:</i> <em class="fd1">{{myfetch | get('info.yxmc')}}</em></div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj"><i class="fd1">出生日期:</i> <em class="fd1">{{myfetch | get('info.csrq')}}</em></div>
        <div class="text fd2 fj"><i class="fd1">专业名称:</i> <em class="fd1">{{myfetch | get('info.zymc')}}</em></div>
      </div>
      <div class="item fj">
        <div class="text fd1 fj"><i class="fd1">联系方式:</i> <em class="fd1">{{myfetch | get('contact.mobile')}}</em></div>
        <div class="text fd2 fj"><i class="fd1">电子邮件:</i> <em class="fd1">{{myfetch | get('contact.email')}}</em></div>
      </div>
      <div class="item" v-if="myfetch && myfetch.reply">
        <div class="text fj"><i class="fd1">回复信息:</i></div>
        <pre>{{myfetch && myfetch.reply}}</pre>
        <br>
      </div>
      <div class="item">
        <div class="text fj"><i class="fd1">个人简介:</i></div>
        <pre>{{myfetch && myfetch.content}}</pre>
      </div>
    </el-card>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions} = createNamespacedHelpers('user/letter');
export default {
  data() {
    return {
      
    };
  },
  methods: {
    ...mapActions(['fetch']),
  },
  mounted() {
    let _id = this.$route.query._id
    this.fetch({id: _id});
  },
  computed: {
    ...mapState(['myfetch']),
  },
  filters: {
    type1: function (val) {
      if (val !== null) {
        switch (val.type) {
          case '0':
            return '招聘信息'
            break;
        
          case '1':
            return '招聘会'
            break;
        }
      }
    },
    statusy: function (val) {
      if (val !== null) {
        switch (val.status) {
          case '0':
            return '未接收'
            break;
        
          case '1':
            return '已接收'
            break;

          case '2':
            return '已回复'
            break;
        }
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
.a1{color:#ff0033}
.a2{color: #d1e000}
.a3{color: #11ca00}
</style>