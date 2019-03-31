<template>
  <div class="data right">
    <el-card class="box-card">
      <div slot="header" class="fj">
        <span class="left">{{myfetch && myfetch.title}}</span>
        <div class="text right fj"><i class="left">状态:</i> <em class="left">{{myfetch | statusy}}</em></div>
      </div>
       <div class="item fj">
        <div class="text left fj"><i class="left">企业名称:</i> <em class="left">{{myfetch && myfetch.corpname}}</em></div>
        <div class="text right fj"><i class="left">类别:</i> <em class="left">{{myfetch | type1}}</em></div>
      </div>
      <div class="item fj">
        <div class="text left fj"><i class="left">姓名:</i> <em class="left">{{myfetch | get('info.xm')}}</em></div>
        <div class="text right fj"><i class="left">学历:</i> <em class="left">{{myfetch | get('info.xl')}}</em></div>
      </div>
      <div class="item fj">
        <div class="text left fj"><i class="left">性别:</i> <em class="left">{{myfetch | get('info.xb')}}</em></div>
        <div class="text right fj"><i class="left">毕业院校:</i> <em class="left">{{myfetch | get('info.yxmc')}}</em></div>
      </div>
      <div class="item fj">
        <div class="text left fj"><i class="left">出生日期:</i> <em class="left">{{myfetch | get('info.csrq')}}</em></div>
        <div class="text right fj"><i class="left">专业名称:</i> <em class="left">{{myfetch | get('info.zymc')}}</em></div>
      </div>
      <div class="item fj">
        <div class="text left fj"><i class="left">联系方式:</i> <em class="left">{{myfetch | get('contact.mobile')}}</em></div>
        <div class="text right fj"><i class="left">电子邮件:</i> <em class="left">{{myfetch | get('contact.email')}}</em></div>
      </div>
      <div class="item" v-if="myfetch && myfetch.reply">
        <div class="text fj"><i class="left">回复信息:</i></div>
        <pre>{{myfetch && myfetch.reply}}</pre>
        <br>
      </div>
      <div class="item">
        <div class="text fj"><i class="left">个人简介:</i></div>
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
  margin-left: 2em;
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